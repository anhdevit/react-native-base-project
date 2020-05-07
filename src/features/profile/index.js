/**
 * @format
 * @flow
 */

import images from '@res/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeArea } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { signout } from '../auth/authSlice';
import ProfileScreen from './ProfileScreen';
import styles from './styles';
import colors from '@config/colors';

function Profile(props) {
  // Props
  const { isUseLogin, signout, userInfo } = props;

  // Hooks
  const { t } = useTranslation();
  const insets = useSafeArea();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.colorPrimary, colors.secondary]}
        style={{ width: '100%', height: 111, justifyContent: 'center' }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <View style={[styles.box_header, { paddingTop: insets.top }]}>
          <View style={styles.ig_user_header}>
            <Image source={images.ic_user_account} />
          </View>
          <View>
            <Text style={styles.txt_hello_user}>{t('user.hello_user')}</Text>
            <View style={{ paddingTop: 7 }}>
              {isUseLogin ? (
                <Text style={[styles.txt_hello_user, styles.txt_user]}>
                  {userInfo.fullName}
                </Text>
              ) : (
                  <TouchableOpacity
                    onPress={() => signout()}>
                    <Text style={[styles.txt_hello_user, styles.txt_user]}>
                      {t('user.login')}
                    </Text>
                  </TouchableOpacity>
                )}
            </View>
          </View>
        </View>
      </LinearGradient>
      <ProfileScreen />
    </View>
  );
}

const mapPropsToState = state => ({
  isUseLogin: state.auth.isUseLogin,
  userInfo: state.auth.userInfo,
});

const mapDispatch = {
  signout,
};

export default connect(
  mapPropsToState,
  mapDispatch,
)(Profile);
