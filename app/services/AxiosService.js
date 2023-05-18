import { baseURL } from '../env.js';
import { logger } from '../utils/Logger.js';

// @ts-ignore
// eslint-disable-next-line no-undef
export const sandboxApi = axios.create({
  baseURL: baseURL,
  timeout: 8000,
  withCredentials: true
})
export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co',
  timeout: 8000,
  withCredentials: false
})


sandboxApi.interceptors.request.use(config => config, handleAxiosError)
sandboxApi.interceptors.response.use(response => response, handleAxiosError)
pokeApi.interceptors.request.use(config => config, handleAxiosError)
pokeApi.interceptors.response.use(response => response, handleAxiosError)


function handleAxiosError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    logger.warn('[📡 AXIOS_ERROR_RESPONSE_DATA]', error.response.data)
  } else if (error.request) {
    // The request was made but no response was received
    logger.warn('[📡 AXIOS_ERROR_NO_RESPONSE]', error.request)
  }else {
    // Something happened in setting up the request that triggered an Error
    logger.warn('[📡 AXIOS_ERROR_INVALID_REQUEST]',error.message)
  }
  return Promise.reject(error)
}