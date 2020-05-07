import ButtonIcon from '@components/ButtonIcon';
import HeaderCardSearch from '@components/HeaderCardSearch';
import LogoHeader from '@components/LogoHeader';
import HomeScreen from '@features/main/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import images from '@res/icons';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { getNavigationDrawerHome } from './RootNavigation';
import HeaderLeft from '@components/HeaderLeft';
import { colors } from 'react-native-elements';

const Stack = createStackNavigator();

function HomeStack() {
  const navigationDrawerHome = getNavigationDrawerHome()
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerLeft: () => (<HeaderLeft />),
        headerTitleAlign: 'center',
        headerStyle: styles.headerStyle,
      })}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          headerLeft: () => {
            return (
              <ButtonIcon
                onPress={() => navigationDrawerHome.openDrawer()}
                style={styles.buttonLeft}
                icon={images.ic_left_menu}
              />
            )
          },
          headerTitle: () => <LogoHeader />,
          headerRight: () => (<HeaderCardSearch
            navigation={navigation}
          />),
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
  },
  buttonLeft: {
    marginLeft: 16,
  },
  headerStyle: {
    shadowColor: colors.ColorBody,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
});

export default HomeStack;
