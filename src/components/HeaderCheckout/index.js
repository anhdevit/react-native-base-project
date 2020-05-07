import { navigate } from '@navigation/RootNavigation';
import images from '@res/icons';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ButtonIcon from '../ButtonIcon';
import { useTranslation } from 'react-i18next';
import { FONT_FAMILY } from '@config/typography';
import colors from '@config/colors';
import { connect } from 'react-redux';
import * as actions from '@features/checkout/modules/actions';

const HeaderCheckout = props => {
  const { t } = useTranslation();

  const goToStepPayment = () => {
    navigate('checkoutOnly', {
      initRoute: 'step3',
    });
    props.updateOrderId(props.orderId);
  };

  return (
    <View style={styles.headerRight}>
      <TouchableOpacity style={styles.button} onPress={goToStepPayment}>
        <Text style={styles.text}>{t('checkout.payment')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  ...actions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderCheckout);

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
  },
  button: {
    paddingRight: 8,
    flex: 1,
    height: 32,
    justifyContent: 'center',
  },
  text: {
    fontSize: 13,
    fontFamily: FONT_FAMILY.REGULAR,
    fontWeight: '600',
    color: colors.blue03,
  },
});
