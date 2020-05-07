import ContentLeftMenu from '@components/ContentLeftMenu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import HomeUserTabs from './HomeUserBottomTab';
import { setNavigationDrawerHome } from './RootNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerHome() {
  return (
    <Drawer.Navigator
      initialRouteName="DrawerCart"
      drawerContent={({navigation}) => <ContentLeftMenu navigation={navigation}/>}
      screenOptions={({ navigation, route }) => {
        setNavigationDrawerHome(navigation)
      }}
    >
      <Drawer.Screen name="homeUserTabs" component={HomeUserTabs} />
    </Drawer.Navigator>
  );
}
