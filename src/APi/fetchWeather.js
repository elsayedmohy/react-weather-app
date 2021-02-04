import axios from "axios";

const API_KEY = `06f0c28d2c01fe1174338b5d7603c030`;
const URL = `https://api.openweathermap.org/data/2.5/weather?`;

export const fetchingWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      appid: API_KEY,
      units: "metric",
    },
  });
  return data;
};
