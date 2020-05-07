/**
 * @format
 * @flow
 */

import ButtonLinearGradient from '@components/ButtonLinearGradient';
import Confirm from '@components/Confirm';
import TextInputFeild from '@components/TextInputFeild';
import { showLoading } from '@features/loading/modules/actions';
import { goBack } from '@navigation/RootNavigation';
import images from '@res/icons';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, ScrollView, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { textStyles } from 'src/data/theme/ThemeData';
import { regexEmail, regexPassword } from 'src/utility';
import { callApiSignUp } from '../authSlice';
import { styles } from './styles';

function SignUpScreen(props) {

  //Props
  const {
    callApiSignUp,
    showLoading
  } = props

  //Hooks
  const { t } = useTranslation();
  
  //State
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCheckTerm, setIsCheckTerm] = useState(false);
  const [verifyPassword, setVerifyPassword] = React.useState('');

  // Ref
  const refcaptcha = useRef(null)


  const signUpAction = async () => {
    if (fullName.trim() === '') {
      return Alert.alert(t('alert.inputfullName'))
    }
    if (email.trim() === '') {
      return Alert.alert(t('alert.inputEmail'))
    }
    if (password.trim() === '') {
      return Alert.alert(t('alert.inputPassword'))
    }
    if (!regexPassword(password)) {
      return Alert.alert(t('alert.wrongPasswordRegister'))
    }
    if (!regexEmail(email)) {
      return Alert.alert(t('alert.wrongEmail'))
    }
    if (!isCheckTerm) {
      return Alert.alert(t('alert.acceptPrivacy'))
    }
    if (password !== verifyPassword) {
      return Alert.alert(t('alert.wrongPasswordRegister'))
    }
    showLoading()
    const data = {
      "fullName": fullName.trim(),
      "userName": userName.trim(),
      "email": email.trim().toLowerCase(),
      "password": password.trim(),
      "passwordConfirm": verifyPassword.trim(),
      "subscribeEmail": true,
    }
    await callApiSignUp(data)
  }

  return (
    <ScrollView style={styles.container}>
      <KeyboardAwareScrollView>
        <Text style={styles.title}>Đăng ký tài khoản</Text>
        <View style={styles.content}>
          <TextInputFeild
            icon={images.ic_username}
            value={userName}
            placeHolder={t('auth.userName')}
            onChangeText={(text) => setUserName(text)}
          />
          <TextInputFeild
            icon={images.ic_username}
            value={fullName}
            placeHolder={t('auth.fullName')}
            onChangeText={(text) => setFullName(text)}
          />
          <TextInputFeild
            icon={images.ic_mail}
            value={email}
            placeHolder={t('auth.requireEmail')}
            onChangeText={(text) => setEmail(text)}
            keyboardType={'email-address'}
          />
          <TextInputFeild
            icon={images.ic_pass}
            value={password}
            placeHolder={t('auth.requirePassword')}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <TextInputFeild
            icon={images.ic_pass}
            value={verifyPassword}
            placeHolder={t('auth.verifyPassword')}
            onChangeText={(text) => setVerifyPassword(text)}
            secureTextEntry
          />
          <Confirm
            checked={isCheckTerm}
            onPress={() => setIsCheckTerm(!isCheckTerm)}
          />
          <ButtonLinearGradient
            title={t('auth.register')}
            onPress={signUpAction}
            styleContainer={styles.button}
          />
          <Text style={styles.textWithLink}>{t('auth.youHaveAccount')}<Text style={textStyles.LinkText} onPress={() => goBack()} > Đăng nhập ngay </Text>
          </Text>
          <Text style={[textStyles.LinkText, styles.textWithLink]}>{t('auth.tutorialRegister')}</Text>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

const mapDispatch = {
  callApiSignUp,
  showLoading
};

export default connect(
  null,
  mapDispatch,
)(SignUpScreen);
