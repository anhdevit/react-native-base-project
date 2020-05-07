import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '@config/typography';
import colors from '@config/colors';

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.background,
  },
  wrapperRow: {
    flexDirection: 'row',
  },
  textStyle: {
    flex: 1,
    fontSize: 15,
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.ColorBody,
    marginBottom: 10,
  },
});

export default styles;
