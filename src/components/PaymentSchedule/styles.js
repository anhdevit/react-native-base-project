import { StyleSheet, Platform } from 'react-native';
import { Colors, Typography } from '@config/index';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    backgroundColor: Colors.border,
    paddingVertical: 7,
    paddingHorizontal: 20,
  },
  title: {
    flex: 1,
    borderColor: Colors.border,
    borderWidth: 0.5,
    height: 36,
    marginRight: 20,
    backgroundColor: Colors.background,
    borderRadius: 7,
    paddingLeft: 10,
    color: Colors.ColorBody,
    paddingBottom: Platform.OS === 'android' ? 9 : 0,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxBtn: (edit) => ({
    borderColor: Colors.border,
    borderWidth: 0.5,
    height: 36,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 3,
    backgroundColor: edit ? Colors.background : Colors.textColor,
  }),
  input: {
    width: 55,
    height: 36,
    fontSize: 17,
    color: Colors.ColorBody,
    textAlign: 'center',
    marginHorizontal: 10,
    backgroundColor: Colors.background,
    borderRadius: 7,
    paddingBottom: Platform.OS === 'android' ? 7 : 0,
  },
  leftAction: {
    alignSelf: 'center',
    padding: 10,
    backgroundColor: Colors.red,
  },
  deleteSwipe: {
    color: Colors.background,
    fontFamily: Typography.FONT_FAMILY.REGULAR,
    fontSize: 13,
    display: 'flex',
  },
  input_container: {
    borderBottomColor: 'transparent',
    marginVertical: -27,
    marginLeft: 10,
  },
});

export default styles;
