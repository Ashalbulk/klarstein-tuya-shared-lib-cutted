import { DeviceEventEmitter, NativeAppEventEmitter, Platform } from 'react-native';

export const listener = Platform.OS === 'ios' ? NativeAppEventEmitter : DeviceEventEmitter;
