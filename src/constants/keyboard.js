import { Platform } from 'react-native';

export const KEYBOARD_LISTENER_SHOW_EVENT =
  Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
export const KEYBOARD_LISTENER_HIDE_EVENT =
  Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
