import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import colors from '@config/colors';
import { FONT_FAMILY } from '@config/typography';
let { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.65)',
  },
  content: {
    backgroundColor: colors.background,
    borderRadius: 14,
    width: 342,
    height: 210,
    overflow: 'hidden',
  },
  wrapperLabel: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: colors.grayBackground,
  },
  labelNote: {
    fontSize: 17,
    lineHeight: 23,
    fontFamily: FONT_FAMILY.REGULAR,
    fontStyle: 'normal',
  },
  containerStyle: {
    width: '100%',
    height: 124,
    // backgroundColor: 'green',
  },
  containerInput: {
    marginTop: -8,
    borderRadius: 0,
    borderWidth: 0,
    marginBottom: 12,
  },
  inputStyle: {
    textAlignVertical: 'top',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    minHeight: 40,
    maxHeight: 86,
  },
  footer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
  },
  textCancel: {
    color: colors.grayText01,
    fontSize: 17,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  textSend: {
    color: colors.TextLink,
    fontSize: 17,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});

export default styles;
