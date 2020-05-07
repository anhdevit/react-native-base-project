import HeaderLeft from '@components/HeaderLeft';
import colors from '@config/colors';
import FilterScreen from '@features/filter';
import Search from '@features/search';
import SearchBar from '@features/search/SearchBar';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DrawerHome from './DrawerHome';

const Stack = createStackNavigator();

function MainStack() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerLeft: () => <HeaderLeft />,
        headerTitleAlign: 'center',
      })}
    // headerMode="none"
    >
      <Stack.Screen
        name="drawerHome"
        component={DrawerHome}
        options={({ navigation, route }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={({ navigation: { goBack }, route }) => ({
          headerTitle: null,
          headerLeft: () => <SearchBar />,
          headerRight: () => (
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={() => goBack()}>
              <Text style={styles.textCanncer}>Huỷ</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="filter"
        component={FilterScreen}
        options={({ navigation: { goBack }, route }) => ({
          title: 'Tạo bộ lọc',
          headerTitleStyle: styles.headerTitleStyle,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
  },
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
  search: {
    width: wp('80%'),
    flex: 1,
    backgroundColor: '#F2F2F2',
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    borderRadius: 8,
  },
  headerBackground: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'white',
    opacity: 0.6,
  },
  buttonBack: {
    marginLeft: 16,
  },
  headerStyle: {
    backgroundColor: colors.TextLink,
    shadowColor: colors.ColorBody,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonCancel: {
    flex: 1,
    width: wp('15%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCanncer: {
    color: '#162B75',
    fontSize: 15,
  },
});

export default MainStack;
