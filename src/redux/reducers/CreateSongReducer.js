import {
    CREATE_SONG_REQUEST,
    CREATE_SONG_SUCCESS,
    CREATE_SONG_FAIL,
} from '../constants/SongActionTypes'

//CREATE SONG
export const CreateSong = (state = {}, action) => {
    console.log(state)
    switch (action.type) {
        case CREATE_SONG_REQUEST:
            return {
                loading:true
            }
        case CREATE_SONG_SUCCESS:
            return {
                songs:action.payload
            }
        case CREATE_SONG_FAIL:
            return {
                loading: false,
                error:action.payload
            }
        default:
            return state
    }
}