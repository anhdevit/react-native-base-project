/**
 * @format
 * @flow
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import images from '../resources/icons';
import colors from '@config/colors';
import { textStyles } from 'src/data/theme/ThemeData';

function Confirm(props) {
  const {
    onPress,
    checked
  } = props;

  const openPrivacy = () => {

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          source={checked ? images.ic_checkbox_selected : images.ic_checkbox }
          resizeMode='stretch'
        />
      </TouchableOpacity>
      <View style={styles.content} >
        <Text style={styles.textContent}>
          Bằng việc nhấn đăng ký, bạn đang đồng ý với các
          <Text
            onPress={openPrivacy}
            style={textStyles.LinkText}
          > Điều kiện & Điều khoản </Text>
          của anhdevs
        </Text>
      </View>
    </View>
  );
};

Confirm.prototype = {
  value: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  icon: PropTypes.number,
  styleContainer: PropTypes.number
}

Confirm.defaultProps = {
  value: 0,
  placeHolder: '',
  onChangeText: () => { }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 16,
  },
  button: {
    flexDirection: 'row',
  },
  underline: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#E5E5E5',
  },
  textContent: {
    fontSize: 13,
  },
  textPrivacy: {
    color: colors.TextLink,
    textDecorationLine: 'underline'
  }
});

export default Confirm;
