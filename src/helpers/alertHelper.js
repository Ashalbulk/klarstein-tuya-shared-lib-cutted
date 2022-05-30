import I18n from 'i18next';
import { Alert } from 'react-native';
import RNRestart from 'react-native-restart';

// import { goBack, navigateToProfile } from '../../../../../app/navigation/NavigationHelpers';
const navigationHelpers = require('../../../../app/navigation/NavigationHelpers');

function _processAlertActions(actions) {
  return actions.map(action => {
    const originalOnPress = action.onPress;
    action.onPress = () => {
      if (originalOnPress) {
        originalOnPress();
      }
      this.alertPresent = false;
    };
    return action;
  });
}

export function displayAlert(
  title,
  message,
  alertBtnAction,
  delay = 10,
  tapOutsidetoCancel = false,
) {
  if (!this.alertPresent) {
    this.alertPresent = true;
    setTimeout(() => {
      Alert.alert(title, message, _processAlertActions(alertBtnAction), {
        cancelable: tapOutsidetoCancel,
        onDismiss: () => (this.alertPresent = false),
      });
    }, delay);
  }
}

export function showResendVerifyEmailAlert(email) {
  const resendEmailBody = I18n.t('signUpScreen.resendEmailAlert.body');
  const resendEmailBodyTail = I18n.t('signUpScreen.resendEmailAlert.tail');
  displayAlert(
    I18n.t('signUpScreen.resendEmailAlert.title'),
    `${resendEmailBody} ${email}${resendEmailBodyTail}`,
    [
      {
        text: I18n.t('signUpScreen.resendEmailAlert.button'),
        onPress: () => {},
      },
    ],
  );
}

export function showSendVerifyEmailAlert(email) {
  const resendEmailBody = I18n.t('forgotPasswordScreen.sendEmailAlert.body');
  const resendEmailBodyTail = I18n.t('forgotPasswordScreen.sendEmailAlert.tail');
  displayAlert(
    I18n.t('forgotPasswordScreen.sendEmailAlert.title'),
    `${resendEmailBody} ${email}${resendEmailBodyTail}`,
    [
      {
        text: I18n.t('forgotPasswordScreen.sendEmailAlert.button'),
        onPress: () => {},
      },
    ],
  );
}

export function showMessageForOldAndroidAlert(androidVersion) {
  displayAlert(
    I18n.t('messageForOldAndroidAlert.title'),
    I18n.t('messageForOldAndroidAlert.body') + ' ' + androidVersion,
    [
      {
        text: I18n.t('messageForOldAndroidAlert.ok'),
        onPress: () => {},
      },
    ],
  );
}

export function showRemoveDeviceAlert(onPress) {
  displayAlert(
    I18n.t('deviceSetting.removeDeviceAlert.title'),
    `${I18n.t('deviceSetting.removeDeviceAlert.message')}\n${I18n.t(
      'deviceSetting.removeDeviceAlert.note',
    )}`,
    [
      {
        text: I18n.t('deviceSetting.removeDeviceAlert.disagreeButton'),
      },
      {
        text: I18n.t('deviceSetting.removeDeviceAlert.agreeButton'),
        onPress,
      },
    ],
    0,
  );
}

export function showRemoveCountdownAlert(onPress) {
  displayAlert(
    I18n.t('countdown.removeCountdownAlert.title'),
    I18n.t('countdown.removeCountdownAlert.message'),
    [
      {
        text: I18n.t('countdown.removeCountdownAlert.disagreeButton'),
      },
      {
        style: 'destructive',
        text: I18n.t('countdown.removeCountdownAlert.agreeButton'),
        onPress,
      },
    ],
    0,
  );
}

export function showRemoveScheduleAlert(onPress) {
  displayAlert(
    I18n.t('schedule.removeScheduleAlert.title'),
    I18n.t('schedule.removeScheduleAlert.message'),
    [
      {
        text: I18n.t('schedule.removeScheduleAlert.disagreeButton'),
      },
      {
        style: 'destructive',
        text: I18n.t('schedule.removeScheduleAlert.agreeButton'),
        onPress,
      },
    ],
    0,
  );
}

export function showRemoveHubAlert(onPress) {
  displayAlert(
    I18n.t('hubSettings.removeHubAlert.title'),
    `${I18n.t('hubSettings.removeHubAlert.message')}\n${I18n.t('hubSettings.removeHubAlert.note')}`,
    [
      {
        text: I18n.t('hubSettings.removeHubAlert.disagreeButton'),
      },
      {
        text: I18n.t('hubSettings.removeHubAlert.agreeButton'),
        onPress,
      },
    ],
    0,
  );
}

export function showLeaveHubAlert(onPress) {
  displayAlert(
    I18n.t('hubSettings.leaveHubAlert.title'),
    I18n.t('hubSettings.leaveHubAlert.message'),
    [
      {
        text: I18n.t('hubSettings.leaveHubAlert.disagreeButton'),
      },
      {
        text: I18n.t('hubSettings.leaveHubAlert.agreeButton'),
        onPress,
      },
    ],
    0,
  );
}

export function showRemoveRoomAlert(onPress) {
  displayAlert(
    I18n.t('manageRooms.removeRoomAlert.title'),
    I18n.t('manageRooms.removeRoomAlert.message'),
    [
      {
        text: I18n.t('manageRooms.removeRoomAlert.disagreeButton'),
      },
      {
        text: I18n.t('manageRooms.removeRoomAlert.agreeButton'),
        onPress,
      },
    ],
    0,
  );
}

export function showRemoveMemberAlert(onPress) {
  displayAlert(
    I18n.t('hubMembers.removeMemberAlert.title'),
    I18n.t('hubMembers.removeMemberAlert.message'),
    [
      {
        text: I18n.t('hubMembers.removeMemberAlert.disagreeButton'),
      },
      {
        text: I18n.t('hubMembers.removeMemberAlert.agreeButton'),
        onPress,
      },
    ],
    0,
  );
}

export function showAddMemberSuccessAlert(newMemberName, onConfirmPress) {
  displayAlert(
    I18n.t('hubMembers.addMemberSuccessAlert.title'),
    `${newMemberName} ${I18n.t('hubMembers.addMemberSuccessAlert.message')}`,
    [
      {
        text: I18n.t('hubMembers.addMemberSuccessAlert.agreeButton'),
        onPress: onConfirmPress,
      },
    ],
    0,
  );
}

export function showAddMemberUnregisteredAlert() {
  displayAlert(
    null,
    I18n.t('hubMembers.addMemberUnregisteredAlert.message'),
    [
      // TODO: implement two buttons with email sending logic
      // {
      //   text: I18n.t('hubMembers.addMemberAlreadyRegisteredAlert.disagreeButton'),
      // },
      {
        text: I18n.t('hubMembers.addMemberUnregisteredAlert.agreeButton'),
      },
    ],
    0,
  );
}

export function showLogoutAlert(onPress) {
  displayAlert(
    I18n.t('profile.logoutAlert.title'),
    `${I18n.t('profile.logoutAlert.message')}`,
    [
      {
        text: I18n.t('profile.logoutAlert.disagreeButton'),
      },
      {
        style: 'destructive',
        text: I18n.t('profile.logoutAlert.agreeButton'),
        onPress,
      },
    ],
    0,
  );
}

// Default alerts with one button to confirm

function showDefaultInfoAlert(
  titleID,
  messageID,
  agreeLabelID,
  onPress = () => {},
  delay = 0,
  tapOutsidetoCancel = true,
) {
  displayAlert(
    I18n.t(titleID),
    I18n.t(messageID),
    [{ text: I18n.t(agreeLabelID), onPress }],
    delay,
    tapOutsidetoCancel,
  );
}

export function showConnectionErrorAlert() {
  showDefaultInfoAlert(
    'connectionError.title',
    'connectionError.message',
    'connectionError.retry',
    RNRestart.Restart,
    10,
    false,
  );
}

export function showResetPasswordSuccessAlert() {
  showDefaultInfoAlert(
    'forgotPasswordScreen.resetPassword',
    'forgotPasswordScreen.successMessage',
    'forgotPasswordScreen.ok',
  );
}

export function showChangePasswordSuccessAlert() {
  showDefaultInfoAlert(
    'changePassword.changePassword',
    'changePassword.successMessage',
    'changePassword.ok',
    navigationHelpers.navigateToProfile,
  );
}

export function showRecipeSetRateSuccessAlert() {
  showDefaultInfoAlert(
    'rateRecipe.setRateMessageSuccess.title',
    'rateRecipe.setRateMessageSuccess.message',
    'rateRecipe.setRateMessageSuccess.ok',
    navigationHelpers.goBack,
  );
}

export function showRecipeChangeRateSuccessAlert() {
  showDefaultInfoAlert(
    'rateRecipe.changeRateMessageSuccess.title',
    'rateRecipe.changeRateMessageSuccess.message',
    'rateRecipe.changeRateMessageSuccess.ok',
    navigationHelpers.goBack,
  );
}

export function showRemoveLastHubUnsuccessfulAlert() {
  showDefaultInfoAlert(
    'hubSettings.removeHubAlert.unsuccessfulLastHub.title',
    'hubSettings.removeHubAlert.unsuccessfulLastHub.message',
    'hubSettings.removeHubAlert.unsuccessfulLastHub.ok',
  );
}

export function showUserIsNotVerifiedAlert() {
  showDefaultInfoAlert(
    'signUpScreen.verifyEmail.continueAlert.title',
    'signUpScreen.verifyEmail.continueAlert.message',
    'signUpScreen.verifyEmail.continueAlert.ok',
  );
}

export function reloadHubListAlert() {
  showDefaultInfoAlert(
    'home.alert.reloadHubList.title',
    'home.alert.reloadHubList.message',
    'home.alert.reloadHubList.confirmButton',
    RNRestart.Restart,
  );
}

export function showInvitationCodeRemovedAlert() {
  showDefaultInfoAlert(
    'hubMembers.removeInvitationCodeSuccessAlert.title',
    'hubMembers.removeInvitationCodeSuccessAlert.message',
    'hubMembers.removeInvitationCodeSuccessAlert.agreeButton',
  );
}

export function showAddHubWithInvitationCodeSuccessAlert() {
  showDefaultInfoAlert(
    'hubMembers.addHubWithInvitationCodeSuccessAlert.title',
    'hubMembers.addHubWithInvitationCodeSuccessAlert.message',
    'hubMembers.addHubWithInvitationCodeSuccessAlert.agreeButton',
  );
}

export function showAddHubWithInvitationCodeFailedAlert(errorText) {
  if (errorText) {
    showDefaultInfoAlert(
      'hubMembers.addHubWithInvitationCodeFailedAlert.somethingWentWrong',
      errorText,
    );
  } else {
    showDefaultInfoAlert(
      'hubMembers.addHubWithInvitationCodeFailedAlert.title',
      'hubMembers.addHubWithInvitationCodeFailedAlert.message',
      'hubMembers.addHubWithInvitationCodeFailedAlert.agreeButton',
    );
  }
}

export function showAccessDeniedAddDevicesAlert() {
  showDefaultInfoAlert(
    'hubMembers.accessDeniedAddDevicesAlert.title',
    'hubMembers.accessDeniedAddDevicesAlert.message',
    'hubMembers.accessDeniedAddDevicesAlert.agreeButton',
  );
}

export function showAccessDeniedDeviceSettingsAlert() {
  showDefaultInfoAlert(
    'hubMembers.accessDeniedDeviceSettingsAlert.title',
    'hubMembers.accessDeniedDeviceSettingsAlert.message',
    'hubMembers.accessDeniedDeviceSettingsAlert.agreeButton',
  );
}

export function showThisHubIsntAvailableAnymoreAlert() {
  showDefaultInfoAlert(
    'hubMembers.thisHubIsntAvailableAnymore.title',
    'hubMembers.thisHubIsntAvailableAnymore.message',
    'hubMembers.thisHubIsntAvailableAnymore.agreeButton',
  );
}

export function showThisDeviceIsntAvailableAnymoreAlert() {
  showDefaultInfoAlert(
    'hubMembers.thisDeviceIsntAvailableAnymore.title',
    'hubMembers.thisDeviceIsntAvailableAnymore.message',
    'hubMembers.thisDeviceIsntAvailableAnymore.agreeButton',
  );
}

export function showAddRoomSuccessAlert() {
  showDefaultInfoAlert(
    'manageRooms.addRoomSuccessAlert.title',
    'manageRooms.addRoomSuccessAlert.message',
    'manageRooms.addRoomSuccessAlert.agreeButton',
  );
}

export function showHubAddMemberAlreadyExistsAlert() {
  displayAlert(
    null,
    I18n.t('hubMembers.addMemberAlreadyExists.message'),
    [
      // TODO: implement two buttons with email sending logic
      // {
      //   text: I18n.t('hubMembers.addMemberAlreadyRegisteredAlert.disagreeButton'),
      // },
      {
        text: I18n.t('hubMembers.addMemberAlreadyExists.agreeButton'),
      },
    ],
    0,
  );
}

export function showUrgentLogoutAlert() {
  showDefaultInfoAlert(
    'profile.urgentLogoutAlert.title',
    'profile.urgentLogoutAlert.message',
    'profile.urgentLogoutAlert.agreeButton',
  );
}
