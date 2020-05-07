import { navigate, toggerDrawer } from '@navigation/RootNavigation';
import images from '@res/icons';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LogoHeader from './LogoHeader';
import { colors } from 'react-native-elements';
import deviceInfoModule from 'react-native-device-info';

const ButtonItem = ({ icons, title, nameScreen }) => {

  const onPressMenu = (nameScreen) => {
    navigate(nameScreen)
    toggerDrawer()
  }

  return (
    <TouchableOpacity
      style={styles.buttonItem}
      onPress={() => onPressMenu(nameScreen)}
    >
      <Image
        source={icons}
        style={styles.icon}
        resizeMode={'contain'}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const ContentLeftMenu = () => {
  const version = deviceInfoModule.getVersion();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <LogoHeader />
        </View>
      </View>
      <Text style={styles.version}>{`Version ${version}`}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5E5',
    paddingVertical: 30
  },
  buttonItem: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center'
  },
  icon: {
    marginHorizontal: 16
  },
  version: {
    alignSelf: 'center',
    color: 'gray',
    marginBottom: 16
  },
  title: {
    fontSize: 17,
    color: '#242424'
  }
})
export default ContentLeftMenu
