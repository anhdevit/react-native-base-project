/**
 * @format
 * @flow
 */

import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import images from '../resources/icons';

function TextInputNormal(props) {
  const {
    placeHolder,
    value,
    onChangeText,
    icon,
    styleContainer,
    secureTextEntry,
    isOtp,
    maxSecondOtp,
    resendOtp
  } = props;

  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry)
  const [countDownOtp, setCountDownOtp] = useState(maxSecondOtp)

  useEffect(() => {
    if (isOtp) {
      if (countDownOtp > 0) {
        setTimeout(() => {
          setCountDownOtp(countDownOtp - 1)
        }, 1000)
      }
    }

  }, [countDownOtp])

  const toggleHiddenPassword = () => {
    setIsSecureTextEntry(!isSecureTextEntry)
  }

  const actionResendOtp = () => {
    setCountDownOtp(maxSecondOtp)
    resendOtp()
  }

  return (
    <View style={[styles.container, styleContainer]}>
      <Image
        source={icon}
        resizeMode='stretch'
      />
      <TextInput
        {...props}
        placeholder={placeHolder}
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
        secureTextEntry={isSecureTextEntry}
        autoCapitalize={'none'}
        autoCorrect={false}
        spellCheck={false}
        placeholderTextColor={'gray'}
      />
      {
        secureTextEntry ?
          <TouchableOpacity onPress={toggleHiddenPassword} >
            <Image
              source={isSecureTextEntry ? images.ic_eye : images.ic_eye_2}
              resizeMode='stretch'
            />
          </TouchableOpacity>
          : null
      }
      {
        isOtp ?
          <TouchableOpacity
            onPress={actionResendOtp}
            disabled={countDownOtp !== 0}
          >
            <Text>{`Gửi lại ${countDownOtp !== 0 ? `(${countDownOtp})` : 'OTP'}`}</Text>
          </TouchableOpacity>
          : null
      }
    </View>

  );
};

TextInputNormal.prototype = {
  value: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  icon: PropTypes.number,
  styleContainer: PropTypes.number
}

TextInputNormal.defaultProps = {
  value: 0,
  placeHolder: '',
  onChangeText: () => { }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 4
  },
  textInput: {
    paddingVertical: 16,
    marginLeft: 8,
    flex: 1,
    fontSize: 15,
    color: 'black'
  },
});

export default TextInputNormal;
