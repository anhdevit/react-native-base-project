import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import images from '@res/icons';
import colors from '@config/colors';
import { useTranslation } from 'react-i18next';
import { FONT_FAMILY } from '@config/typography';
import ButtonLinearGradient from '@components/ButtonLinearGradient';
import LinearGradient from 'react-native-linear-gradient';
import ButtonBorderGradient from '@components/ButtonBorderGradient';
import { connect } from 'react-redux';
import { signout } from '@features/auth/authSlice';
import { useNavigation } from '@react-navigation/native';

const RequiredLogin = (props) => {

  const { signout } =  props

  // Hooks
  const {navigate} = useNavigation()
  const { t } = useTranslation();

  const [x, setX] = React.useState(new Animated.Value(800));


  React.useEffect(() => {
    slide();
  }, []);

  const slide = () => {
    Animated.spring(x, {
      toValue: 0,
    }).start();
  };

  const signIn = () => {
    signout()
  };

  const signUp = () => {
    navigate('authStack', {
      screen: 'SignUpScreen'
    })
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.viewContent,
          {
            transform: [
              {
                translateX: x,
              },
            ],
          },
        ]}>
        <FastImage
          source={images.required_login}
          resizeMode={'contain'}
          style={{ minWidth: 134, minHeight: 134 }}
        />

        <View style={styles.content}>
          <Text
            style={[
              styles.titleBold,
              {
                fontSize: 15,
              },
            ]}>
            {t('checkout.not_found')}{' '}
            {t('checkout.cart_title').toLocaleLowerCase()}
          </Text>

          <Text style={styles.titleNormal}>
            <Text style={styles.titleBold}>{t('user.login')} </Text>
            {t('checkout.to_show_your_cart')}
          </Text>

          <View style={styles.footer}>
            <ButtonBorderGradient
              text={t('auth.signIn')}
              containerStyle={{ flex: 1 }}
              onPress={signIn}
            />

            <ButtonLinearGradient
              title={t('auth.register')}
              onPress={signUp}
              styleContainer={{
                height: 46,
                flex: 1,
                marginLeft: 16,
              }}
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  signout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RequiredLogin);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  viewContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginHorizontal: 32,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBold: {
    fontWeight: '600',
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.bodyText,
    letterSpacing: 0.4,
  },
  titleNormal: {
    fontSize: 13,
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.bodyText,
    marginTop: 8,
    textAlign: 'center',
    letterSpacing: 0.6,
  },
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  btnSignUp: {
    height: 46,
    flex: 1,
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

