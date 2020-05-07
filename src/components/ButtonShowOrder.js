import colors from '@config/colors';
import { FONT_FAMILY } from '@config/typography';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

const ios = Platform.OS == 'ios' ? true : false;

const ButtonShowOrder = ({ orderNumber }) => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      style={styles.buttonShowOrder}
      onPress={() =>
        navigate('orderDetail', {
          orderNumber: orderNumber,
          orderStatusType: 'In-Progress',
        })
      }>
      {/* <Text style={styles.textOrderInfo}>{i18n.checkout.order_info}</Text> */}
      <View style={{ flex: 1 }}>
        <Text style={styles.textOrderInfo}>{t('checkout.detail_order')}</Text>
        <Text style={styles.subTextOrderInfo}>
          {t('checkout.show_your_order_detail')}
        </Text>
      </View>
      <AntDesign name="right" size={20} color={colors.iconColor} />
    </TouchableOpacity>
  );
};

const mapStateToProps = state => ({
  orderNumber: state.checkout.orderId,
});

export default connect(mapStateToProps)(ButtonShowOrder);

const styles = StyleSheet.create({
  buttonShowOrder: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  textOrderInfo: {
    fontSize: 17,
    fontFamily: ios ? FONT_FAMILY.LIGHT : FONT_FAMILY.REGULAR,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 25,
  },
  subTextOrderInfo: {
    fontSize: 13,
    fontFamily: ios ? FONT_FAMILY.LIGHT : FONT_FAMILY.REGULAR,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: colors.iconColor,
  },
});
