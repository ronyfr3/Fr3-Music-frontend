import React from 'react'
import './Music.css'
import Toastify from './Toastify'

const Warning = ({ error }) => {
   
    return (
        <>
            {
                error === undefined ? '' :
                <div className='warning'>
                     <button onClick={() => window.location.reload(false)} className='btnrefresh'>Tap here to get music</button>
                    </div>
            }
            <Toastify error={error}/>
      </>
    )
}

export default Warning
