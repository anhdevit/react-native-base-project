/**
 * @format
 * @flow
 */
import ButtonLinearGradient from '@components/ButtonLinearGradient';
// import Captcha from '@components/Captcha';
import DismissKeyboardView from '@components/DismissKeyboardView';
import TextInputNormal from '@components/TextInputNormal';
import { showLoading } from '@features/loading/modules/actions';
import images from '@res/icons';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { regexPassword } from 'src/utility';
import { callApiSignIn } from '../authSlice';
import BgFooterSignIn from '../components/BgFooterSignIn';
import BgSignIn from '../components/BgSignIn';
import { ButtonRegisterNow } from '../components/ButtonRegisterNow';
import { LogoSignIn } from '../components/LogoSignin';
import { styles } from './styles';

function SignInScreen(props) {

  //Props
  const { 
    email, 
    callApiSignIn, 
    showLoading
  } = props;

  //Hooks
  const { t } = useTranslation();

  //State
  const [username, setUsername] = useState(email);
  const [password, setPassword] = useState('');

  //Validate to refresh captcha
  const signInAction = async () => {
    if (username.trim() === '') {
      return Alert.alert('Bạn cần nhập tên đăng nhập')
    }
    if (password.trim() === '') {
      return Alert.alert(t('alert.inputPassword'))
    }
    if (!regexPassword(password)) {
      return Alert.alert(t('alert.wrongPassword'))
    }
    showLoading()
    await callApiSignIn(username, password)
  }

  return (
    <DismissKeyboardView style={styles.container}>
      <View style={styles.container}>
        <BgFooterSignIn />
        <BgSignIn />
        <KeyboardAwareScrollView>
          <View style={styles.content}>
            <LogoSignIn />
            <TextInputNormal
              icon={images.ic_mail}
              value={username}
              placeHolder={t('auth.email')}
              styleContainer={styles.email}
              onChangeText={email => setUsername(email)}
              keyboardType={'email-address'}
              returnKeyType={'next'}
            />
            <TextInputNormal
              icon={images.ic_pass}
              value={password}
              placeHolder={t('auth.password')}
              styleContainer={styles.password}
              onChangeText={password => setPassword(password)}
              secureTextEntry
              returnKeyType={'done'}
              maxLength={32}
            />
            <ButtonLinearGradient
              title="Đăng nhập"
              onPress={signInAction}
              styleContainer={styles.button}
            />
            <ButtonRegisterNow />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </DismissKeyboardView>
  );
}

const mapPropsToState = (state) => ({
  email: state.auth.email
})

const mapDispatch = {
  callApiSignIn,
  showLoading
};

export default connect(
  mapPropsToState,
  mapDispatch,
)(SignInScreen);
