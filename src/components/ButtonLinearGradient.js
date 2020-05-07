/**
 * @format
 * @flow
 */

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '@config/colors';
import { FONT_FAMILY } from '@config/typography';

function ButtonLinearGradient(props) {
  const { title, onPress, styleContainer, icon, disabled, styleLinear } = props;

  return (
    <TouchableOpacity
      style={[styles.container, styleContainer]}
      onPress={onPress}
      disabled={disabled}>
      <LinearGradient
        colors={[colors.colorPrimary, colors.secondary]}
        style={[styles.linearGradient, styleLinear]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        {icon ? (
          <Image source={icon} resizeMode="stretch" />
        ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

ButtonLinearGradient.prototype = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  styleContainer: PropTypes.number,
};

ButtonLinearGradient.defaultProps = {
  title: '',
  onPress: () => {},
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderRadius: 40,
    overflow: 'hidden',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
  },
  buttonText: {
    color: colors.background,
    fontFamily: FONT_FAMILY.REGULAR,
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 17,
  },
});

export default ButtonLinearGradient;
