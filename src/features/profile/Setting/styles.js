import { StyleSheet } from 'react-native';
import { Colors } from '@config/index';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  btn: {
    justifyContent: 'space-between',
    borderBottomColor: Colors.border,
    borderBottomWidth: 0.5,
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  btnTitle: {
    fontSize: 15,
    lineHeight: 20,
  },
  txtLanguage: {
    color: Colors.iconColor,
    marginRight: 10,
  },
});

export default styles;
