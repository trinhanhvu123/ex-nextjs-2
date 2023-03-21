import {useContext} from 'react'
import{DataContext} from '../store/GlobalState' 
import Loading from './Loading'
import Toast from './Toast'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Alert from '@mui/material/Alert';

const Notify = () =>{
    const [state, dispatch] = useContext(DataContext)
    const {notify} = state

    return(
       <>
            {notify.loading && <Loading />}
            {notify.error && 
                <Toast
                    msg={{ msg: notify.error, title: "Error" }}
                    handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
                    bgColor = 'error'
                />
            }
           {notify.success && 
                <Toast
                    msg={{ msg: notify.success, title: "Success"}}
                    handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
                    bgColor = 'success'
                />
            }
       </>
    )
}
export default Notify