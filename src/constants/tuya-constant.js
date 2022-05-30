//login Account
const countryCode = '86';
const userName = '';
const password = '';

//connect Wifi
const ssid = '';
const wifiPassWord = '';
const wifiTimeOut = 120;
const typeEZ = 'TY_EZ';
const typeAP = 'TY_AP';
const typeBLE = 'TY_BLE';
const typeZigbee = 'TY_ZB';
const typeWired = 'TY_WIRED';

//share
const shareCountryCode = 86;
const shareUserAccount = '';

//timer
const taskName = 'my timer';
const dps = { 0: true };

const groupName = 'My group';

//create Home,
const lon = 0;
const homeName = 'My Room';
const lat = 0;
const geoName = '';
const rooms = ['A living room', 'Master BedRoom'];

//create Scene
const sceneName = 'My Scene';
const sceneBackground = 'https://images.tuyacn.com/smart/rule/cover/bedroom.png';
const matchType = 'MATCH_TYPE_OR';
const stickyOnTop = false;
const cityId = 793409505965772800;

//constants need not be modified

const messageTask = 'messageTask';
const messageCondition = 'messageCondition';

const INFERARED_PANEL_HEATER_DIVIDED_BY = 10;
const ZIGBEE_DIVIDED_BY = 100;
const SOUS_VIDE_DIVIDED_BY = 10;

// Max name length for hubs(home) and rooms
const TUYA_GENERAL_NAME_MAX_LENGTH = 25;

// Max name length for smart devices
const TUYA_DEVICES_NAME_MAX_LENGTH = 30;

export {
  cityId,
  countryCode,
  dps,
  geoName,
  groupName,
  homeName,
  INFERARED_PANEL_HEATER_DIVIDED_BY,
  lat,
  lon,
  matchType,
  messageCondition,
  messageTask,
  password,
  rooms,
  sceneBackground,
  sceneName,
  shareCountryCode,
  shareUserAccount,
  SOUS_VIDE_DIVIDED_BY,
  ssid,
  stickyOnTop,
  taskName,
  TUYA_DEVICES_NAME_MAX_LENGTH,
  TUYA_GENERAL_NAME_MAX_LENGTH,
  typeAP,
  typeBLE,
  typeEZ,
  typeWired,
  typeZigbee,
  userName,
  wifiPassWord,
  wifiTimeOut,
  ZIGBEE_DIVIDED_BY,
};
