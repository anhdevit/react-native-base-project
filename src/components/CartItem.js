import colors from '@config/colors';
import { FONT_FAMILY } from '@config/typography';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { Colors, Spacing, Typography } from '../config';
import { useTranslation } from 'react-i18next';
import TextPriceCommon from './TextPriceCommon';

export default function ItemCart({
  title,
  content,
  assets,
  tips,
  titleStyle,
  valueStyle,
  heightTooltip,
  widthTooltip,
  unit,
  subTextStyle,
}) {
  const { t } = useTranslation();

  return (
    <View style={[styles.box]}>
      <View style={styles.row}>
        <Text style={[styles.titleItem, titleStyle]}>{title}</Text>
        {tips && (
          <Tooltip
            popover={<Text style={styles.tipText}>{tips}</Text>}
            backgroundColor={colors.grayBorder01}
            height={heightTooltip}
            width={widthTooltip}
            overlayColor={null}>
            <Image source={assets} style={styles.tooltip} />
          </Tooltip>
        )}
      </View>
      {typeof content === 'number' ? (
        <TextPriceCommon
          style={[styles.contentItem, valueStyle]}
          value={content}
        />
      ) : (
        <Text style={[styles.contentItem, valueStyle]}>{content}</Text>
      )}
      {unit && <Text style={[styles.subText, subTextStyle]}>{unit}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayBackground,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Colors.silver,
    borderBottomWidth: 0.5,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.background,
  },
  row: {
    flex: 1,
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
    fontFamily: FONT_FAMILY.REGULAR,
    paddingLeft: 7,
  },
  apartment: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 15,
    color: colors.bodyText,
    lineHeight: 22,
  },
  titleItem: {
    marginVertical: 7,
    fontSize: Typography.FONT_SIZE.BASE,
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.bodyText,
    paddingRight: Spacing.small,
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
    color: Colors.red,
    fontWeight: '600',
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
    backgroundColor: Colors.background,
  },
  boxInPutReduction: {
    height: 40,
    borderColor: Colors.silver,
    borderWidth: Spacing.very_small,
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  iconTxtReduction: {
    borderRightWidth: 1,
    borderRightColor: Colors.silver,
    margin: 5,
    paddingTop: 5,
    paddingRight: 7,
  },
  btnApply: {
    justifyContent: 'center',
    padding: Spacing.small + 2,
  },
  txtBtnApply: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: Typography.FONT_SIZE.SMALL - 1,
    fontWeight: '600',
    color: colors.gradient,
  },
  boxIntoMoney: {
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  titleIntoMoney: {
    fontSize: Typography.FONT_SIZE.EXTRA_SMALL + 1,
    color: Colors.background,
  },
  txtinfoMoney: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.gradient,
  },
  tipText: {
    color: colors.bodyText,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 15,
    textAlign: 'center',
  },
  subText: {
    width: 6,
    fontFamily: FONT_FAMILY.REGULAR,
    fontWeight: '600',
    fontSize: 10,
    textAlignVertical: 'top',
  },
  tooltip: {
    padding: 5,
    margin: 7,
  }
});
