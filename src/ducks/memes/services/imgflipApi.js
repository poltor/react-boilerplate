import { getHttpClient } from '../../../utils/http';

const http = getHttpClient();


export function getMemes() {
  return http.get('https://api.imgflip.com/get_memes');
}

const imgflipApi = {
  getMemes,
};

export default imgflipApi;
