import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const YOUTUBE_TOKEN = import.meta.env.VITE_APP_YOUTUBE_TOKEN;
const options = {
  params: {
    q: "desp",
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": YOUTUBE_TOKEN,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
