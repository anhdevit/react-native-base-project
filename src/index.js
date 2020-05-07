/**
 * @format
 * @flow
 */

import AppContainer from '@navigation/AppContainer';
import React, { createContext } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeData } from './data/theme';
export const ThemeContext = createContext(ThemeData);

function Root(props) {
  return (
    <ThemeContext.Provider value={ThemeData}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFF" />
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    </ThemeContext.Provider>
  );
}

export default Root;
