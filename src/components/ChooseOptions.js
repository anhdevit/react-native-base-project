/**
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import images from '@res/icons';

function ChooseOptions(props) {
  const {confirmActivated, setConfirmActivated} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn phương thức xác nhận</Text>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setConfirmActivated('phone')}
        >
          <Image
            source={confirmActivated === 'phone' ? images.ic_radio_selected : images.ic_radio_unselected}
            resizeMode='stretch'
          />
          <Text style={styles.textButton}>Số điện thoại</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setConfirmActivated('email')}
        >
          <Image
            source={confirmActivated === 'email' ? images.ic_radio_selected : images.ic_radio_unselected}
            resizeMode='stretch'
          />
          <Text style={styles.textButton}>Email</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.underline} />
    </View>
  );
};

ChooseOptions.prototype = {
}

ChooseOptions.defaultProps = {
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 4,
    paddingTop: 16,
  },
  title: {
    fontSize: 15,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  underline: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#E5E5E5',
  },
  textButton: {
    fontSize: 15,
    marginLeft: 16,
  }
});

export default ChooseOptions;
