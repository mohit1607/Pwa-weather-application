import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather/';
const API_KEY = 'da33cbe021c9ca946fd5cf2751f7fd59';

export const fetchData = async (query) => {
   const {data} = await axios.get(URL, {
       params: {
           q:query,
           units:'metric',
           appid:API_KEY,
       }
   })

    return data;
} // this is good practice of api calling