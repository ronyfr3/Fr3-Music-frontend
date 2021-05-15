import {
    SONG_LIST_REQUEST,
    SONG_LIST_SUCCESS,
    SONG_LIST_FAIL,
    // DELETE_SONG_REQUEST,
    DELETE_SONG_SUCCESS,
    DELETE_SONG_FAIL,
    CREATE_SONG_REQUEST,
    CREATE_SONG_SUCCESS,
    CREATE_SONG_FAIL,
} from '../constants/SongActionTypes'

export const songReducer = (state = [], action) => {
  // console.log('reducer_state:',state)
  switch (action.type) {

    // CREATE_SONG
      case CREATE_SONG_REQUEST:
        return {
          loading: true
        }
      case CREATE_SONG_SUCCESS:
        return {
          songs:[...state.songs,action.payload]
        }
      case CREATE_SONG_FAIL:
        return {
          loading: false,
          error: action.payload
        }
    
    //FETCHING_SONGS
        case SONG_LIST_REQUEST:
          return {
            loading: true
          };
        case SONG_LIST_SUCCESS:
      return {
            songs: action.payload
          };
        case SONG_LIST_FAIL:
          return {
            loading: false,
            error: action.payload
          };
            
          //DELETE SONG 
    //keeping DELETE_SONG_REQUEST throws error
        // case DELETE_SONG_REQUEST:
        //         return {
        //             loading: false
        //         };
        case DELETE_SONG_SUCCESS:
                return {
                    songs: state.songs.filter((song) => song._id !== action.payload)
                }
        case DELETE_SONG_FAIL:
                return {
                    loading: false,
                    error: action.payload
                };
    default:
      return state;
  }
};
