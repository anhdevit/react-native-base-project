import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '@config/colors';
import LinearGradient from 'react-native-linear-gradient';
import { FONT_FAMILY } from '@config/typography';

const ButtonBorderGradient = ({
  text,
  containerStyle,
  textStyle,
  onPress,
  wrapperChildren,
  component,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.btnSignUp, containerStyle]}
      onPress={onPress}>
      <LinearGradient
        colors={[colors.colorPrimary, colors.yellow]}
        style={styles.linearGradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0.75, y: 0 }}>
        <View style={[styles.wrapperText, wrapperChildren]}>
          {component ? (
            component
          ) : (
            <Text style={[styles.textSignUp, textStyle]}>{text}</Text>
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnSignUp: {
    height: 46,
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderRadius: 40,
    overflow: 'hidden',
  },
  wrapperText: {
    width: '100%',
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    margin: 1,
    flex: 1,
  },
  textSignUp: {
    color: colors.colorPrimary,
    fontFamily: FONT_FAMILY.REGULAR,
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 17,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 1,
  },
});

export default ButtonBorderGradient;
