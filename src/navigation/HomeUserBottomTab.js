import IconWithBadge from '@components/IconWithBadge';
import colors from '@config/colors';
import { Colors } from '@config/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import images from '../resources/icons';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

function HomeUserTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.colorPrimary,
      }}
      keyboardHidesTabBar={true}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'noti') {
            return (
              <IconWithBadge
                name={
                  focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline'
                }
                size={size}
                color={color}
              />
            );
          }
        },
      })}>
      <Tab.Screen
        name="HomeStack"
        options={{
          title: 'Trang chủ',
          tabBarIcon: props => {
            return (
              <Image
                source={images.ic_home}
                style={{
                  overlayColor: props.color,
                  tintColor: props.color,
                }}
              />
            );
          },
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="profileStack"
        component={ProfileStack}
        options={{
          title: 'Tài khoản',
          tabBarIcon: props => {
            return (
              <Image
                source={images.ic_user}
                style={{
                  overlayColor: props.color,
                  tintColor: props.color,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeUserTabs;

const styles = StyleSheet.create({
  ncontainer_noti: {
    position: 'absolute',
    width: 16,
    height: 16,
    backgroundColor: Colors.red,
    top: 10,
  },
});
