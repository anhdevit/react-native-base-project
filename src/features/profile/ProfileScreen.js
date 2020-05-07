/**
 * @format
 * @flow
 */

import { Colors } from '@config/index';
import { navigate } from '@navigation/RootNavigation';
import images from '@res/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { isTablet } from 'react-native-device-info';
import { connect } from 'react-redux';
import { signout } from '../auth/authSlice';
import ButtonAccout from './components/button';
import styles from './styles';

function ProfileScreen(props) {
  const { isUseLogin, signout } = props;
  const { t } = useTranslation();
  const { navigation } = props;

  const signOutUser = () => {
    signout();
  };

  const actionButtonEdit = () => {
    if (isTablet()) {
      return navigation.jumpTo('edit');
    }
    navigate('edit');
  };

  const actionOrdermanage = () => {
    if (isTablet()) {
      return navigation.jumpTo('ordermanage');
    }
    navigate('ordermanage');
  };

  const actionChangpassword = () => {
    if (isTablet()) {
      return navigation.jumpTo('changpassword');
    }
    navigate('changpassword');
  };

  const actionSetting = () => {
    if (isTablet()) {
      return navigation.jumpTo('setting');
    }
    navigate('setting');
  };

  const actionSupport = () => {
    if (isTablet()) {
      return navigation.jumpTo('support');
    }
    navigate('support');
  };

  return (
    <View style={styles.container}>
      <ButtonAccout
        icon={images.ic_user}
        title={t('user.account_information')}
        onPress={actionButtonEdit}
        styleCommon={{ marginTop: 8 }}
      />
      <View style={{ backgroundColor: Colors.background, height: '100%' }}>
        {isUseLogin && (
          <TouchableOpacity style={styles.btn_logout} onPress={signOutUser}>
            <Text style={styles.txt_logout}>{t('user.logout')}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const mapPropsToState = state => ({
  isUseLogin: state.auth.isUseLogin,
});

const mapDispatch = {
  signout,
};

export default connect(
  mapPropsToState,
  mapDispatch,
)(ProfileScreen);
