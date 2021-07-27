import axios from 'axios';
import { BASE_URL_COINGECKO } from './variables';

export const getCryptos = async ({ setCryptos}) => {
  try {
    const { data } = await axios.get(BASE_URL_COINGECKO);
    setCryptos(data); 
  } catch (error) {
    console.log(error);
  }
};