import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState, useContext} from 'react'
import Head from 'next/head';
import valid from '../../utils/valid'
import { DataContext } from '../../store/GlobalState';


const theme = createTheme();

export default function Register() {

    const initialState = {name: '', email: '', password: '', cf_password: ''}
    const [userData, setUserData] = useState(initialState)
    const {name, email, password, cf_password} = userData

    const [state, dispatch] = useContext(DataContext)

    const handleChangeInput = (e: { target: { name: any; value: any; }; }) =>{
        const {name, value} = e.target
        setUserData({...userData, [name]: value})
    }

    const handleSubmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault()
        const errMsg = valid(name, email, password, cf_password)
        if(errMsg) return dispatch({type:'NOTIFY', payload:{error: errMsg} })

        dispatch({type:'NOTIFY', payload:{success: 'OK'} })
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Head>
                    <title>Register page</title>
                </Head>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    value={name}
                                    onChange={handleChangeInput}
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={email}
                                    onChange={handleChangeInput}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    value={password}
                                    onChange={handleChangeInput}
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="cf_password"
                                    value={cf_password}
                                    onChange={handleChangeInput}
                                    label="Confirm Password"
                                    type="password"
                                    id="cf_password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                           
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link href="/signin" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}