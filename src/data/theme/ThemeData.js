import colors from '@config/colors';
import { StyleSheet } from 'react-native';
export const textStyles = StyleSheet.create({
  Title1: {
    fontSize: 34
  },
  Title2: {
    fontSize: 26
  },
  Title3: {
    fontSize: 22
  },
  Headline: {
    fontSize: 17
  },
  Body: {
    fontSize: 17
  },
  Callout: {
    fontSize: 15
  },
  Button: {
    fontSize: 17
  },
  Caption: {
    fontSize: 13
  },
  LinkText: {
    lineHeight: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'Open Sans',
    fontSize: 13,
    color: colors.TextLink,
    textDecorationLine: 'underline'
  },
  Placeholder: {

  }
});

const ThemeData = {
  textStyle: textStyles,
  color: colors,
}

export default ThemeData;
