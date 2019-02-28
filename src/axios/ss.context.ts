import axios from 'axios';
import environment from '../environment';

const ssContext = axios.create({
  baseURL: environment.apiContext,
  withCredentials: true
});

export default ssContext;