import { PermissionsAndroid } from 'react-native';

export function requestLocationPermission() {
  try {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    // const granted = ;
    // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //     console.log('You can use the location');
    // } else {
    //     console.log('Location permission denied');
    // }
  } catch (err) {
    // console.warn(err);
  }
}
