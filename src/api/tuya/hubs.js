import { HUB_ROLES } from '../../constants/hubs';
import helpers from '../../helpers';
import * as TuyaHomeApi from '../../tuya-sdk/lib/TuyaHomeApi';
import * as TuyaHomeManagerApi from '../../tuya-sdk/lib/TuyaHomeManagerApi';
import * as TuyaHomeMemberApi from '../../tuya-sdk/lib/TuyaHomeMemberApi';

export const getHubsList = () => {
  return TuyaHomeManagerApi.queryHomeList()
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const createHub = (name, geoName, lon, lat, rooms) => {
  return TuyaHomeManagerApi.createHome({
    name,
    lon,
    lat,
    geoName,
    rooms,
  })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const removeHub = homeId => {
  return TuyaHomeApi.dismissHome({ homeId })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const renameHub = (homeId, name, lon, lat, geoName) => {
  return TuyaHomeApi.updateHome({ homeId, name, lon, lat, geoName })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const changeHubLocation = (homeId, name, lon, lat, geoName) => {
  return TuyaHomeApi.updateHome({ homeId, name, lon, lat, geoName })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

// export const subscribeOnDeviceAddOrRemove = (hubId, getHomeDetail) => {
//     TuyaHomeApi.unRegisterHomeStatusListener({ homeId: hubId });
//     TuyaHomeApi.registerHomeStatusListener({ homeId: hubId }, () => {
//         getHomeDetail();
//     }, () => {
//         getHomeDetail();
//     }, () => {}, () => {}, () => {});
// };
//
// export const unsubscribeOnDeviceAddOrRemove = (hubId) => {
//     TuyaHomeApi.unRegisterHomeStatusListener({ homeId: hubId });
// };
//
// export const subscribeOnDeviceStatusChange = (hubId) => {
//     TuyaHomeApi.unRegisterHomeStatusListener({ homeId: hubId })
//     TuyaHomeApi.registerHomeDeviceStatusListener({ homeId: hubId }, (data) => {
//       console.log('data1', data);
//     }, (data) => {
//         console.log('data2', data);
//     }, () => { console.log('data3', data);}, (data) => { console.log('data4', data);}, (data) => {console.log('data5', data); });
// };
//
// export const unsubscribeOnDeviceStatusChange = (hubId) => {
//     TuyaHomeApi.unRegisterHomeStatusListener({ homeId: hubId });
// };

export const getHubMemberList = homeId => {
  return TuyaHomeMemberApi.queryMemberList({ homeId })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const addHubMember = (homeId, name, userAccount, countryCode, role, headPic, autoAccept) => {
  return TuyaHomeMemberApi.addMember({
    homeId,
    name,
    userAccount,
    countryCode,
    role,
    admin: role > HUB_ROLES.MEMBER,
    headPic,
    autoAccept,
  })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const updateHubMember = (homeId, memberId, name, role) => {
  return TuyaHomeMemberApi.updateMember({
    homeId,
    memberId,
    name,
    role,
    admin: role > HUB_ROLES.MEMBER,
  })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const removeHubMember = (homeId, memberId) => {
  return TuyaHomeMemberApi.removeMember({
    homeId,
    memberId,
  })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const joinFamilyWithAccept = (homeId, isAccepted) => {
  return TuyaHomeMemberApi.joinFamilyWithAccept({
    homeId,
    isAccepted,
    action: isAccepted,
  })
    .then(data => {
      return { success: true, data };
    })
    .catch(helpers.apiHelper.handleError);
};

export const getHubInvitationCode = homeId => {
  return TuyaHomeMemberApi.getInvitationMessage({ homeId })
    .then(data => ({ success: true, data }))
    .catch(helpers.apiHelper.handleError);
};

export const addHubWithInvitationCode = invitationCode => {
  return TuyaHomeMemberApi.joinHomeWithInvitationCode({ invitationCode })
    .then(() => ({ success: true }))
    .catch(helpers.apiHelper.handleError);
};

export const withdrawHubInvitationCode = invitationCodeId => {
  return TuyaHomeMemberApi.cancelMemberInvitationCode({ invitationCodeId })
    .then(() => ({ success: true }))
    .catch(helpers.apiHelper.handleError);
};

export const getHubInvitationList = homeId => {
  return TuyaHomeMemberApi.fetchInvitationRecordListWithHomeID({ homeId })
    .then(data => ({ success: true, data }))
    .catch(helpers.apiHelper.handleError);
};

export const registerHubListListeners = ({
  onHomeAdded = () => {},
  onHomeRemoved = () => {},
  onHomeInfoChanged = () => {},
  onSharedDeviceList = () => {},
  onSharedGroupList = () => {},
  onServerConnectSuccess = () => {},
}) => {
  return TuyaHomeManagerApi.registerTuyaHomeChangeListener(
    onHomeAdded,
    onHomeRemoved,
    onHomeInfoChanged,
    onSharedDeviceList,
    onSharedGroupList,
    onServerConnectSuccess,
  );
};

export const unregisterHubListListeners = listeners => {
  return TuyaHomeManagerApi.unregisterTuyaHomeChangeListener(listeners);
};

export const registerHubStatusListener = (
  homeId,
  {
    onDeviceAdded = () => {},
    onDeviceRemoved = () => {},
    onGroupAdded,
    onGroupRemoved,
    onMeshAdded,
  },
) => {
  return TuyaHomeApi.registerHomeStatusListener(
    { homeId },
    onDeviceAdded,
    onDeviceRemoved,
    onGroupAdded,
    onGroupRemoved,
    onMeshAdded,
  );
};

export const unregisterHubStatusListener = (homeId, listener) => {
  return TuyaHomeApi.unRegisterHomeStatusListener({ homeId }, listener);
};
