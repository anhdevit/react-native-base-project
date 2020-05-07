/**
 * @format
 * @flow
 */

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View, Keyboard, TouchableOpacity } from 'react-native';
import images from '@res/icons';

function TextInputFeild(props) {
  const {
    placeHolder,
    value,
    onChangeText,
    icon,
    styleContainer,
    secureTextEntry
  } = props;

  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry)

  const toggleHiddenPassword = () => {
    setIsSecureTextEntry(!isSecureTextEntry)
  }

  return (
    <View style={[styles.container, styleContainer]}>
      <View style={styles.content}>
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
          autoCapitalize={'none'}
          autoCorrect={false}
          spellCheck={false}
          blurOnSubmit={false}
          onSubmitEditing={() => Keyboard.dismiss()}
          placeholderTextColor={'gray'}
          secureTextEntry={isSecureTextEntry}
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
      </View>
      <View
        style={styles.underline}
      />
    </View>
  );
};

TextInputFeild.prototype = {
  value: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  icon: PropTypes.number,
  styleContainer: PropTypes.number
}

TextInputFeild.defaultProps = {
  value: 0,
  placeHolder: '',
  onChangeText: () => { }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 4
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    paddingVertical: 16,
    marginLeft: 16,
    fontSize: 15,
    flex: 1,
    color: 'black'
  },
  underline: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#E5E5E5',
  }
});

export default TextInputFeild;
