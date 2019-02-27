import axios from 'axios';
import { environment } from '../environment';

export const ssContext = axios.create({
  baseURL: environment.apiContext,
  withCredentials: true
});