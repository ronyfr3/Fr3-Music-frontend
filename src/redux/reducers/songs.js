import {
  SONG_LIST_REQUEST,
  SONG_LIST_SUCCESS,
  SONG_LIST_FAIL,
  CREATE_SONG_REQUEST,
  CREATE_SONG_SUCCESS,
  CREATE_SONG_FAIL,
  DELETE_SONG_REQUEST,
  DELETE_SONG_SUCCESS,
  DELETE_SONG_FAIL,
} from '../constants/SongActionTypes'

export const songReducer = (
  state = { loading: true, songs: [] },
  action
) => {
  switch (action.type) {

    //FETCH SONGS
    case SONG_LIST_REQUEST:
      return { loading: true };
    case SONG_LIST_SUCCESS:
      return { loading: false, songs: action.payload };
    case SONG_LIST_FAIL:
      return { loading: false, error: action.payload };
    
    //CREATE
    case CREATE_SONG_REQUEST:
      return { loading: true };
    case CREATE_SONG_SUCCESS:
      return { songs: [...state.songs, action.payload] };
     case CREATE_SONG_FAIL:
      return { loading: false, error: action.payload };
    
    //DELETE
    case DELETE_SONG_REQUEST:
      return { loading: true };
    case DELETE_SONG_SUCCESS:
      return { songs: state.songs.filter((song) => song._id !== action.payload) }
    case DELETE_SONG_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};