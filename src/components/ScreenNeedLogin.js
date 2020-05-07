import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { FONT_FAMILY } from '@config/typography';
import { colors } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { signout } from '@features/auth/authSlice';
import { connect } from 'react-redux';

const ScreenNeedLogin = (props) => {
  const { t } = useTranslation();
  const { signout } = props;

  return (
    <View style={styles.containerLoading}>
      <Text style={styles.textNotSignIn}>
        <Text
          style={styles.textNotSignInBold}
          onPress={() => signout()}>
          {t('auth.signIn') + ' / ' + t('auth.register') + ' '}
        </Text>
        để xem các sản phẩm yêu thích của bạn
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNotSignIn: {
    fontSize: 13,
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.ColorBody,
    textAlign: 'center',
    width: wp('70')
  },
  textNotSignInBold: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.ColorBody,
  }
})

const mapDispatch = {
  signout,
};

export default connect(
  null,
  mapDispatch,
)(ScreenNeedLogin);
