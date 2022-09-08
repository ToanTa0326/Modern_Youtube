import axios from "axios";

const baseURL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: baseURL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '6de6eb53afmshd41a1b5ac5b3c01p160f42jsna9aa7d4d26f1',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${baseURL}/${url}`, options)
    return data;
}