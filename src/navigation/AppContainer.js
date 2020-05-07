/**
 * @format
 * @flow
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { connect } from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { navigationRef } from './RootNavigation';
import ModalLoading from '@components/ModalLoading';

function AppContainer({ userToken, isUserGuest }) {
  return (
    <NavigationContainer ref={navigationRef}>
      {!userToken && !isUserGuest ? <AuthStack /> : <MainStack />}
      <ModalLoading />
    </NavigationContainer>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    userToken: state.auth.userToken,
    isUserGuest: state.auth.isUserGuest,
  };
};

export default connect(mapStateToProps)(AppContainer);
