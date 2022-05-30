import { Dimensions, Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export function isTablet() {
  const WINDOW = Dimensions.get('window');
  return WINDOW.width > 495;
}
