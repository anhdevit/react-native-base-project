import { StyleSheet } from 'react-native';
import { Colors, Typography } from '@config/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box_header: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  ig_user_header: {
    width: 50,
    height: 50,
    backgroundColor: Colors.background,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  ig_user: {
    width: 50,
    height: 50,
    backgroundColor: Colors.background,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  txt_hello_user: {
    color: Colors.background,
    fontSize: Typography.FONT_SIZE.EXTRA_SMALL + 1,
    fontFamily: Typography.FONT_FAMILY.REGULAR,
  },
  txt_user: {
    fontSize: Typography.FONT_SIZE.MEDIUM + 1,
    fontWeight: 'bold',
  },
  btnProfile: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 50,
    alignItems: 'center',
    borderBottomColor: Colors.border,
    borderBottomWidth: 0.5,
    backgroundColor: Colors.background,
    flexDirection: 'row',
  },
  btn_logout: {
    borderColor: Colors.colorPrimary,
    borderWidth: 1,
    borderRadius: 20,
    padding: 9,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  txt_logout: {
    fontFamily: Typography.FONT_FAMILY.REGULAR,
    fontSize: Typography.FONT_SIZE.BASE,
    color: Colors.colorPrimary,
    lineHeight: 22,
  },
  hotline: {
    fontFamily: Typography.FONT_FAMILY.REGULAR,
    padding: 5,
    paddingLeft: 15,
    fontSize: Typography.FONT_SIZE.BASE,
    color: Colors.colorPrimary,
    fontWeight: '600',
    lineHeight: 22,
  },
});

export default styles;
