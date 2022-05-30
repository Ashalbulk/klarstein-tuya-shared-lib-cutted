import Geolocation from '@react-native-community/geolocation';
import { path } from 'ramda';
import Geocoder from 'react-native-geocoding';

export const getLocationAsync = () =>
  new Promise(resolve => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = path(['coords'], position);
        let region = {
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };
        resolve({ success: true, result: region });
      },
      e => resolve({ success: false, error: e }),
      { timeout: 5000 },
    );
  });

export const initGeocoder = (API_KEY, { language }) => {
  Geocoder.init(API_KEY, { language });
};

export const getAddress = (latitude, longitude) =>
  new Promise(resolve => {
    Geocoder.from(latitude, longitude)
      .then(address => {
        const result = path(['results', 0], address) || {};
        resolve({ success: true, result });
      })
      .catch(error => {
        resolve({ success: false, error });
      });
  });

export const getCountryCode = (latitude, longitude) =>
  new Promise(resolve => {
    Geocoder.from(latitude, longitude)
      .then(address => {
        const result = path(['results', 0], address) || {};
        const addressComponent = path(['address_components'], result) || [];
        const countryObject = addressComponent.filter(value => value.types.includes('country'));
        const countryCode = countryObject[0].short_name;
        resolve({ success: true, countryCode });
      })
      .catch(error => {
        resolve({ success: false, error });
      });
  });

export const isLocationValid = (latitude = 0, longitude = 0) => {
  return !((latitude === 0 && longitude === 0) || (latitude === 80.99 && longitude === 80.99));
};
