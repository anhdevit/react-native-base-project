/**
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import Root from './src';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { store, persistor } from '@reducers/store';
import { PersistGate } from 'redux-persist/integration/react'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('vi'),
  init: () => { },
  cacheUserLanguage: () => { },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    debug: true,
    resources: {
      vi: {
        translation: require('./src/translations/vi.json'),
      },
    },
  });

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
