/**
 * @format
 * @flow
 */

import colors from '@config/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  viewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 32
  },
  viewButton: {
    flex: 1,
    marginHorizontal: 16,
  },
  normalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 24,
    borderColor: colors.colorPrimary
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    paddingVertical: 10
  },
  textButton: {
    color: 'white',
    fontSize: 15
  }
});
