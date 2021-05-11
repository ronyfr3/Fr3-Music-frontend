import React, { useRef, useState } from "react";
import {CancelToken} from 'axios'
import {MdCloudUpload} from 'react-icons/md'
// import {ProgressBar} from 'react-bootstrap'
import './Music.css'

import { createSong } from '../redux/actions/SongActions';
import { useDispatch  } from 'react-redux';


const SongForm = () => {
  const [file, setFile] = useState('');
  const [Progress, setProgress] = useState(0);
  const cancelFileUpload=useRef(null)
console.log(Progress)
  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setProgress(0)
  };

  //percentage creator
  const songFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setProgress(percentage);
    },
    CancelToken:new CancelToken(cancel=>cancelFileUpload.current=cancel)
  };
  const cancelUpload = () => {
     if(cancelFileUpload.current) cancelFileUpload.current('user cancel the file upload')
   }

  //UPLOAD/SEND DATA TO BACKEND
  const dispatch=useDispatch()
  const uploadSongFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    dispatch(createSong(formData,songFileOptions));
  };
 
  // console.log(file)
  return (
    <div className='music_form'>
      <form>
        <input type="file" multiple={false} onChange={handleChange} className='upload_input'/>
        <button className='upload_song' type='button' onClick={uploadSongFile}>
          {Progress > 0 && Progress < 100 ? <p className='uploadPercentage'>{`${Progress}%`}</p> : (<MdCloudUpload className='uploadlogo' />)} Upload Your Song</button>
        {
          Progress > 0 && Progress < 100 && <button onClick={cancelUpload} className='cancelupload'>Cancel Upload</button>
        }
        {/* {Progress > 0 && Progress < 100 && (<ProgressBar animated={true} active now={Progress} label={`${Progress}%`}/>)} */}
      </form>
    </div>
  );
};

export default SongForm;
