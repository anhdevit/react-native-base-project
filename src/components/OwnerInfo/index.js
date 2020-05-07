import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FONT_FAMILY } from '@config/typography';
import colors from '@config/colors';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styles from './styles';

function UserInfo(props) {
  const { ownerInfo } = props;
  const { t } = useTranslation();

  return (
    <View style={[styles.content, { paddingHorizontal: 16, paddingTop: 10 }]}>
      <View style={styles.wrapperRow}>
        <Text style={styles.textStyle}>{t('checkout.full_name')}</Text>
        <Text style={styles.textStyle}>{ownerInfo.getFullName()}</Text>
      </View>
      <View style={styles.wrapperRow}>
        <Text style={styles.textStyle}>{t('checkout.personal_id')}</Text>
        <Text style={styles.textStyle}>{ownerInfo.getPersonalId()}</Text>
      </View>
      <View style={styles.wrapperRow}>
        <Text style={styles.textStyle}>{t('checkout.address')}</Text>
        <Text style={styles.textStyle}>{ownerInfo.getAddress()}</Text>
      </View>
      <View style={styles.wrapperRow}>
        <Text style={styles.textStyle}>{t('checkout.city')}</Text>
        <Text style={styles.textStyle}>{ownerInfo.getCity()}</Text>
      </View>
      <View style={styles.wrapperRow}>
        <Text style={styles.textStyle}>{t('checkout.nationality')}</Text>
        <Text style={styles.textStyle}>{ownerInfo.getStateCode()}</Text>
      </View>
      <View style={styles.wrapperRow}>
        <Text style={styles.textStyle}>{t('auth.email')}</Text>
        <Text style={styles.textStyle}>{ownerInfo.getEmail()}</Text>
      </View>
      <View style={styles.wrapperRow}>
        <Text style={styles.textStyle}>{t('checkout.phone')}</Text>
        <Text style={styles.textStyle}>{ownerInfo.getPhone()}</Text>
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  ownerInfo: state.checkout.ownerInfo,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInfo);

UserInfo.propTypes = {
  name: PropTypes.string,
  personalId: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  nation: PropTypes.string,
  numberPhone: PropTypes.string,
  email: PropTypes.string,
};
