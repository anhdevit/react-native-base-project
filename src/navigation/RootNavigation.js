import * as React from 'react';
import {
  DrawerActions,
  StackActions,
  CommonActions,
} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function toggerDrawer() {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
}

export function openDrawer() {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
}

export function closeDrawer() {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
}

let navigationDrawerHome = null;

export const setNavigationDrawerHome = navigation => {
  navigationDrawerHome = navigation;
};

export const getNavigationDrawerHome = () => {
  return navigationDrawerHome;
};

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function popToHome() {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name: 'drawerHome' }],
    }),
  );
}
