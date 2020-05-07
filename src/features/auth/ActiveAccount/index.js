/**
 * @format
 * @flow
 */

import BackgroundBuilding from '@components/BackgroundBuilding';
import ButtonLinearGradient from '@components/ButtonLinearGradient';
import Captcha from '@components/Captcha';
import ChooseOptions from '@components/ChooseOptions';
import images from '@res/icons';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { callApiActiveAccount } from '../authSlice';
import { styles } from './styles';
import { showLoading } from '@features/loading/modules/actions';

function ActiveAccount(props) {

  //Props
  const { 
    route, 
    callApiActiveAccount,
    showLoading
  } = props;

  //Hooks
  const { t } = useTranslation();

  //States
  const [confirmActivated, setConfirmActivated] = useState('phone');

  //Refs
  const refcaptcha = useRef(null)


  const checkLoadingWhenCallApi = async (tokenCaptcha) => {
    const { username } = route.params;
    await callApiActiveAccount(username, tokenCaptcha, confirmActivated)
  }

  const onReceiveToken = (tokenCaptcha) => {
    checkLoadingWhenCallApi(tokenCaptcha)
  }

  const actionActiveAccount = () => {
    showLoading()
    refcaptcha.current.refreshToken()
  }

  return (
    <View style={styles.container}>
      <BackgroundBuilding />
      <Captcha
        refcaptcha={refcaptcha}
        onReceiveToken={onReceiveToken} />
      <View style={styles.content}>
        <View style={styles.contentText}>
          <Text style={styles.textForgot}>{t('auth.activeAccount')}</Text>
          <Text style={styles.textDescription}>{t('auth.descriptionActiveAccount')}</Text>
        </View>
        <ChooseOptions
          confirmActivated={confirmActivated}
          setConfirmActivated={(confirmActivated) => setConfirmActivated(confirmActivated)}
        />
        <ButtonLinearGradient
          icon={images.enter}
          onPress={actionActiveAccount}
          styleContainer={styles.button}
        />
      </View>
    </View >
  );
};

const mapPropsToState = (state) => ({
  email: state.auth.email
})

const mapDispatch = {
  callApiActiveAccount,
  showLoading
};


export default connect(
  mapPropsToState,
  mapDispatch,
)(ActiveAccount);
