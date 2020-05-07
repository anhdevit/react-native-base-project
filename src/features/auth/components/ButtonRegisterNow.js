/**
 * @format
 * @flow
 */

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import colors from '@config/colors';

export function ButtonRegisterNow() {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  const signUp = () => {
    navigate('SignUpScreen')
  };

  return (
    <View style={styles.buttonRegister}>
      <Text style={styles.register}>{t('auth.youDontHaveAccount')}</Text>
      <Text
        style={styles.registerButton}
        onPress={signUp}
      >{` ${t('auth.registerNow')}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  register: {
    fontSize: 13,
    color: 'white'
  },
  buttonRegister: {
    flexDirection: 'row',
    marginTop: 10,
  },
  registerButton: {
    color: colors.colorPrimary,
    textDecorationLine: 'underline',
    fontSize: 13,
  },
});
