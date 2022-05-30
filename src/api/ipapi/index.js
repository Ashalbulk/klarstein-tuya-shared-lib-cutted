// import { API_IPAPI, API_IPAPI_KEY } from '../../constants/apiSettings';

let API_IPAPI_URL = null;
let API_IPAPI_KEY = null;

const init = (key, url) => {
  API_IPAPI_URL = url;
  API_IPAPI_KEY = key;
};

const getLocationByIp = () =>
  new Promise(resolve => {
    fetch(`${API_IPAPI_URL}json?key=${API_IPAPI_KEY}`)
      .then(function (response) {
        response.json().then(data => {
          resolve({ success: true, data });
        });
      })
      .catch(function (error) {
        resolve({ success: false, error });
      });
  });

const getCountryCodeUrl = () => {
  return `${API_IPAPI_URL}/country_calling_code?key=${API_IPAPI_KEY}`;
};
export default {
  init,
  getLocationByIp,
  getCountryCodeUrl,
};
