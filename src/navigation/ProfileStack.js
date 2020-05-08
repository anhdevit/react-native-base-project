import HeaderLeft from '@components/HeaderLeft';
import colors from '@config/colors';
import Profile from '@features/profile';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

function ProfileStack() {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerLeft: () => <HeaderLeft />,
        headerTitleAlign: 'center',
      })}>
      <Stack.Screen
        name="profile"
        component={Profile}
        options={({ navigation, route }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;

const styles = StyleSheet.create({
  btnRight: {
    paddingRight: 20,
  },
  title: {
    color: '#C48429',
    fontSize: 17,
  },
  headerTitleStyle: {
    fontSize: 17,
    color: colors.colorPrimary,
  },
});
