import axios from 'axios';

export default axios.create({
  baseURL: `https://620503c8161670001741b305.mockapi.io`
});


export const apiMock = axios.create({
  baseURL: `http://localhost:3000`
});


