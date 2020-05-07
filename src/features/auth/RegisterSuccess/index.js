/**
 * @format
 * @flow
 */

import BackgroundBuilding from '@components/BackgroundBuilding';
import ButtonLinearGradient from '@components/ButtonLinearGradient';
import { navigate } from '@navigation/RootNavigation';
import images from '@res/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

function RegisterSuccess(props) {
  const {route} = props 
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <BackgroundBuilding />
      <View style={styles.content}>
        <Image source={images.success} />
        <Text style={styles.title}>{route.params ? route.params.title : t('auth.registerSuccessTitle')}</Text>
        <Text style={styles.textDescription}>{route.params ? route.params.description : t('auth.registerSuccess')}</Text>
        <ButtonLinearGradient
          title={t('auth.signIn')}
          onPress={() => navigate('SignInScreen')}
          styleContainer={styles.button}
        />
      </View>
    </View >
  );
};

export default RegisterSuccess;
