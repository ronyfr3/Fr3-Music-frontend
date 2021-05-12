import React, { useEffect } from "react";
import Player from "./Player";
import { getSongs } from "../redux/actions/SongActions";
import { useSelector, useDispatch } from "react-redux";
import { deleteSong} from "../redux/actions/SongActions";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaMusic } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Loader from './Loader'
import axios from "axios";
import fileDownload from 'js-file-download' //it helps to download file to avoid req.headers set issue
import "./Music.css";

const AllSongs = () => {
  const dispatch = useDispatch();
  const allsong = useSelector((state) => state.songs); //state.songs===songs:songReducer
  const { songs,loading,error } = allsong; //songs-->songs=[{_id,fileName etc}]  destructuring songs array
  // console.log("Allsongs:--->", allsong);

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);
  console.log(loading)
if(loading){
  return <Loader error={error}/>
}

  return (
           <div className="songs_profiles">
      {songs.map((song,i) => {
        const { songURL, fileName, _id } = song;
        // console.log(song)
        //dispatch(downloadSong(_id))
        //we dont need redux for download file coz we never have to update it or need to do something with it
        return (
          <div key={i} className="song_info">
            <div className="download_delete_song">
              <p
                className="downloadbtn"
                onClick={() =>
                  axios.get(`https://fr3music.herokuapp.com/api/music/`, {
                    responseType: 'blob',
                    params: {
                      fileName,
                      songURL
                    },
                  }).then(res=>fileDownload(res.data, songURL))
                }
              >
                <FiDownload className="downloadlogo" /> Download
              </p>
              <p
                onClick={() => dispatch(deleteSong(_id))}
                className="deleteSong"
              >
                <RiDeleteBack2Fill />
              </p>
            </div>
            <div className="music_logo">
              <FaMusic className="famusiclogo" />
              <p className="famusic">{fileName}</p>
            </div>
            <img src="./visualizer2.gif" alt="" />
            <Player filePath={songURL} song={song}></Player>
          </div>
        );
      })}
    </div>
  );
};

export default AllSongs;
