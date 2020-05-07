import images from '@res/icons';
import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '@config/colors';

export function LogoSignIn() {
  return (
    <View style={styles.container} >
      <Text style={styles.logo}>AnhDev.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop: hp('15%'),
    color: colors.colorPrimary,
    fontSize: 30,
    fontWeight: 'bold'
  },
  anhdev: {
    marginTop: 8,
    tintColor: 'white'
  },
});
