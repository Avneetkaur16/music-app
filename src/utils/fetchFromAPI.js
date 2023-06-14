import axios from 'axios';

const BASE_URL = 'https://deezerdevs-deezer.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: {
    q: null,
  },
  headers: {
    'X-RapidAPI-Key': 'c56d6bee20mshb720974fbf3d1fep10dfdbjsn5abc116b2b52',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};


export const fetchFromAPI = async(url) => {
    
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}

