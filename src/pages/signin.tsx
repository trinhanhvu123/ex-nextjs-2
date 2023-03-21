import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Head from 'next/head'
import Link from '@mui/material/Link';
import { DataContext } from '../../store/GlobalState';
import {postData} from '../../utils/fetchData'
import {useState, useContext} from 'react'
import Cookie from 'js-cookie'

const theme = createTheme();

export default function SignIn() {

    const initialState = {email: '', password: ''}
    const [userData, setUserData] = useState(initialState)
    const {email, password} = userData

    const {state, dispatch} = useContext(DataContext)

    const handleChangeInput = (e: { target: { name: any; value: any; }; }) =>{
        const {name, value} = e.target
        setUserData({...userData, [name]: value})
        dispatch({type:'NOTIFY', payload:{} })
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) =>{
        e.preventDefault()
   
        dispatch({type:'NOTIFY', payload:{loading: true} })

        const res = await postData('auth/login', userData)

        if(res.err) return dispatch({type:'NOTIFY', payload:{error: res.err}})
        
        dispatch({ type: 'NOTIFY', payload: {success: res.msg} })

        dispatch({ type: 'AUTH', payload: {
            token: res.access_token,
            user: res.user
        } })

        Cookie.set('refreshtoken',res.refreshtoken,{
            path:'api/auth/accessToken',
            expires: 7
        })
        localStorage.setItem('firstLogin', 'true')
       
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Stack>
                    <Head>
                        <title>Sign In Page</title>
                    </Head>


                </Stack >
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            onChange={handleChangeInput}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            value={password}
                            onChange={handleChangeInput}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />                    
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link href="/register" variant='body2'>
                                    Don't have an account? Register now
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}