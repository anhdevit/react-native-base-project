import { StyleSheet, Platform } from 'react-native';
import colors from '@config/colors';
import { FONT_FAMILY } from '@config/typography';

const ios = Platform.OS == 'ios' ? true : false;

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 11,
    fontFamily: ios ? FONT_FAMILY.LIGHT : FONT_FAMILY.REGULAR,
    color: colors.ColorBody,
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginBottom: 4,
  },
  resTr: {},
  containerInput: {
    flex: 1,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: colors.silver,
  },
  wrapperInput: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: -8,
  },
  valueStyle: {
    color: colors.ColorBody,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 15,
    letterSpacing: -0.24,
    paddingHorizontal: 10,
    minHeight: 40,
    textAlignVertical: 'center',
  },
  required: {
    color: colors.red,
    fontSize: 11,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});

export default styles;
