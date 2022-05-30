const MemberNativeApi = require('react-native').NativeModules.TuyaHomeMemberModule;

const TuyaHomeMemberApi = {
  updateMember(params) {
    return MemberNativeApi.updateMember(params);
  },
  updateMemberWithBean(params) {
    return MemberNativeApi.updateMemberWithBean(params);
  },
  updateMemberRole(params) {
    return MemberNativeApi.updateMemberRole(params);
  },
  addMember(params) {
    return MemberNativeApi.addMember(params);
  },
  addMemberWithBean(params) {
    return MemberNativeApi.addMemberWithBean(params);
  },
  removeMember(params) {
    return MemberNativeApi.removeMember(params);
  },
  queryMemberList(params) {
    return MemberNativeApi.queryMemberList(params);
  },
  getMemberDeviceList(params) {
    return MemberNativeApi.getMemberDeviceList(params);
  },
  addMemberAccount(params) {
    return MemberNativeApi.addMemberAccount(params);
  },
  uploadMemberAvatar(params) {
    return MemberNativeApi.uploadMemberAvatar(params);
  },
  processInvitation(params) {
    return MemberNativeApi.processInvitation(params);
  },
  joinFamilyWithAccept(params) {
    return MemberNativeApi.joinFamilyWithAccept(params);
  },
  getInvitationMessage(params) {
    return MemberNativeApi.getInvitationMessage(params);
  },
  joinHomeWithInvitationCode(params) {
    return MemberNativeApi.joinHomeWithInvitationCode(params);
  },
  cancelMemberInvitationCode(params) {
    return MemberNativeApi.cancelMemberInvitationCode(params);
  },
  fetchInvitationRecordListWithHomeID(params) {
    return MemberNativeApi.fetchInvitationRecordListWithHomeID(params);
  },
};

module.exports = TuyaHomeMemberApi;
