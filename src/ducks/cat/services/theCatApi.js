import { getHttpClient } from '../../../utils/http';

const http = getHttpClient();


export function fetchRandomCatPic() {
  return http.get('https://api.thecatapi.com/v1/images/search?size=fulln');
}

const theCatApi = {
  fetchRandomCatPic,
};

export default theCatApi;
