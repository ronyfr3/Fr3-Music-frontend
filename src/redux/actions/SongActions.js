import {
  // SONG_LIST_REQUEST,
  SONG_LIST_SUCCESS,
  SONG_LIST_FAIL,
  // CREATE_SONG_REQUEST,
  CREATE_SONG_SUCCESS,
  CREATE_SONG_FAIL,
  // DELETE_SONG_REQUEST,
  DELETE_SONG_SUCCESS,
  DELETE_SONG_FAIL
} from "../constants/SongActionTypes";

import * as api from "../../api";


//GET_SONGS_FROM BACKEND
export const getSongs = () => async (dispatch) => {
  try {
    // dispatch({
    //   type:SONG_LIST_REQUEST
    // })
    const { data } = await api.fetchSongs();
    dispatch({
      type: SONG_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SONG_LIST_FAIL,
      payload: error.response && error.response.data.message
    })
  }
};

//CREATE_SONG_THEN SEND TO BACKEND
export const createSong = (songFormData, options) => async (dispatch) => {
  try {
    //sending a post into backend
    // dispatch({
    //   type:CREATE_SONG_REQUEST
    // })
    //   const config = {
    //   "Content-Type": "application/json"
    // }
    const { data } = await api.createSong(songFormData, options);
    dispatch({
      type: CREATE_SONG_SUCCESS,
      payload: data,
    });
  } catch (error) {
     dispatch({
        type: CREATE_SONG_FAIL,
        payload: error.response && error.response.data.message
      });
  }
};

//DELETE_SONG_FROM DB
export const deleteSong = (id) => async (dispatch) => {
  try {
    // dispatch({
    //   type:DELETE_SONG_REQUEST
    // })
    await api.deleteSong(id);
    dispatch({
      type: DELETE_SONG_SUCCESS, payload: id
    });
  } catch (error) {
    dispatch({
      type: DELETE_SONG_FAIL,
      payload: error.response && error.response.data.message
    })
  }
};