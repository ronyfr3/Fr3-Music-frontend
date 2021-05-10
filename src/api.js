import axios from "axios";

const url = "https://fr3music.herokuapp.com/api/music";

export const fetchSongs = () => axios.get(url);
export const createSong = (newSong) => axios.post(url, newSong);
export const deleteSong = (id) => axios.delete(`${url}/${id}`);
