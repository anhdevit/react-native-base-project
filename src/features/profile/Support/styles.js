import { StyleSheet } from 'react-native';
import { Colors, Typography } from '@config/index';

const styles = StyleSheet.create({
  version: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  txt: {
    fontSize: Typography.FONT_SIZE.EXTRA_SMALL + 1,
    fontFamily: Typography.FONT_FAMILY.REGULAR,
    lineHeight: 20,
    color: Colors.iconColor,
  },
  box_version: {
    height: '100%',
    backgroundColor: Colors.background,
    marginTop: 7,
  },
});

export default styles;
