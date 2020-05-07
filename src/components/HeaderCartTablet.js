import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HeaderLeft from './HeaderLeft';
import HeaderRightCart from './HeaderRightCart';
import images from '@res/icons';
import { useTranslation } from 'react-i18next';

export default function HeaderCartTablet({ navigation, total }) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <HeaderLeft icon={images.ic_close1} />
      <Text>{`${t('checkout.cart_title')} (${total})`}</Text>
      <HeaderRightCart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 46,
    marginTop: 18,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
});
