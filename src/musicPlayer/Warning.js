import React from 'react'
import './Music.css'

const Warning = () => {
    return (
        <div className='warning'>
            <p className='upi'>Upload Music Only</p>
            <button onClick={() => window.location.reload(false)} className='btnrefresh'>Click to reload!</button>
        </div>
    )
}

export default Warning
