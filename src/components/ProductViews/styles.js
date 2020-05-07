import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Spacing, Typography } from '../../config';
import { FONT_FAMILY } from '@config/typography';
import colors from '@config/colors';
const ios = Platform.OS == 'ios' ? true : false;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayBackground,
  },
  scrollView: {
    flexGrow: 1,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.border,
    borderBottomWidth: 0.5,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.background,
  },
  row: {
    flex: 1,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ig: {
    width: 80,
    height: 60,
  },
  apartmentName: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.colorPrimary,
  },
  address: {
    fontSize: 13,
    fontFamily: ios ? FONT_FAMILY.LIGHT : FONT_FAMILY.REGULAR,
    paddingLeft: 7,
  },
  apartment: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 15,
    color: colors.bodyText,
    lineHeight: 22,
  },
  titleItem: {
    fontSize: Typography.FONT_SIZE.BASE,
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.bodyText,
    paddingRight: Spacing.medium,
  },
  contentItem: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: Typography.FONT_SIZE.BASE,
    color: colors.bodyText,
    fontWeight: '600',
  },
  txtDiscount: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: Typography.FONT_SIZE.BASE,
    color: colors.red,
    fontWeight: '600',
    marginRight: 1,
  },
  footer: {
    backgroundColor: colors.TextLink,
    paddingHorizontal: 16,
    paddingBottom: 15,
  },
  boxReduction: {
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.background,
  },
  boxInPutReduction: {
    borderColor: colors.border,
    borderWidth: 0.5,
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  iconTxtReduction: {
    borderRightWidth: 0.5,
    borderRightColor: colors.border,
    paddingRight: 13,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  btnApply: {
    minWidth: 60,
    paddingHorizontal: 16,
    height: '100%',
    justifyContent: 'center',
  },
  txtBtnApply: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: Typography.FONT_SIZE.SMALL - 1,
    fontWeight: 'bold',
    color: colors.colorPrimary,
  },
  boxIntoMoney: {
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  titleIntoMoney: {
    fontSize: Typography.FONT_SIZE.EXTRA_SMALL + 1,
    color: colors.background,
  },
  txtinfoMoney: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.gradient,
  },
  tipText: {
    color: colors.colorPrimary,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 15,
  },
  subText: {
    width: 6,
    fontFamily: FONT_FAMILY.REGULAR,
    fontWeight: '600',
    fontSize: 10,
    textAlignVertical: 'top',
  },
  tooltip_voucher: {
    textAlign: 'center',
    color: colors.bodyText,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  salesperson_code: {
    fontSize: 13,
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.bodyText,
    paddingBottom: 7,
    paddingRight: 8,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: colors.TextLink,
    fontSize: 15,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  separator: {
    width: 1,
    height: 32,
    backgroundColor: colors.border,
  },
});

export default styles;
