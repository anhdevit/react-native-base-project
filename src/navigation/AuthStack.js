import HeaderLeft from '@components/HeaderLeft';
import LogoHeader from '@components/LogoHeader';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import RegisterSuccess from '../features/auth/RegisterSuccess';
import SignInScreen from '../features/auth/SignIn';
import SignUpScreen from '../features/auth/SignUp';

const Stack = createStackNavigator();

const HiddenHeaderTitle = {
  headerTitle: null,
  
}

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName='SignInScreen'
      screenOptions={({ navigation, route }) => ({
        headerLeft: () => (<HeaderLeft />),
        headerTitle: () => (<LogoHeader />),
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTitleAlign: 'center'
      })}
    >
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          headerTitle: null,
          headerLeft: null
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
      />
      <Stack.Screen
        name="RegisterSuccess"
        component={RegisterSuccess}
        options={HiddenHeaderTitle}
      />
    </Stack.Navigator >
  );
}

export default AuthStack;
