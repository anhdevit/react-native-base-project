import colors from '@config/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LogoHeader = () => {
  return (
    <View style={styles.headerTitle}>
      <Text style={{
        color: colors.colorPrimary,
        fontSize: 20
      }}>anhdev.com</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  headerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default LogoHeader
