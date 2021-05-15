import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Toastify = ({ error }) => {
    
    //error/dark/success/warning/default
    return (
        <div className='toast'>
         <ToastContainer  style={{ width: "300px",height:'100px' }}>
            { error === undefined ? '' : (
                toast.error(error, {
                position:toast.POSITION.TOP_CENTER
            }) 
            )}
        </ToastContainer>
        </div>
    )
}

export default Toastify
