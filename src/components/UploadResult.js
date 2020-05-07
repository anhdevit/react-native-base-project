import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import colors from '@config/colors';
import { FONT_FAMILY } from '@config/typography';
import { useTranslation } from 'react-i18next';

const ios = Platform.OS == 'ios' ? true : false;

const UploadResult = ({ urlsFileUploaded }) => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      style={styles.viewUploadFile}
      onPress={() => navigate('upload')}>
      <View style={{ flex: 1, marginRight: 44 }}>
        <Text style={styles.textTitleUpload} numberOfLines={1}>
          {urlsFileUploaded.length == 0
            ? t('checkout.upload_payment_credentials_or_receipts')
            : t('checkout.upload_payment_credentials_or_receipts')}
        </Text>

        {urlsFileUploaded.length == 0 ? (
          <Text style={styles.textUploadInfo}>
            {t('checkout.no_file_uploaded')}{' '}
            <Text style={styles.textUploadNow}>{t('checkout.upload_now')}</Text>
          </Text>
        ) : (
          <Text style={styles.textUploadSuccess}>
            {t('checkout.uploaded_success')} {urlsFileUploaded.length} file
          </Text>
        )}
      </View>
      <AntDesign name="right" size={20} color={colors.iconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewUploadFile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: colors.grayBackground,
  },
  textTitleUpload: {
    fontSize: 17,
    fontFamily: ios ? FONT_FAMILY.LIGHT : FONT_FAMILY.REGULAR,
    color: colors.ColorBody,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  textUploadInfo: {
    fontSize: 13,
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.textColor,
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginTop: 2,
  },
  textUploadNow: {
    color: colors.TextLink,
  },
  textUploadSuccess: {
    fontSize: 13,
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.colorPrimary,
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginTop: 2,
  },
});

const mapStateToProps = state => ({
  urlsFileUploaded: state.checkout.urlsFileUploaded.filter(x => x != ''),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UploadResult);
