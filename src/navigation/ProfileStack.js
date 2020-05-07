import HeaderChat from '@components/HeaderChat';
import HeaderLeft from '@components/HeaderLeft';
import colors from '@config/colors';
import Profile from '@features/profile';
import AskedQuestionScreen from '@features/profile/Support/AskedQuestions/AskedQuestions';
import AskedQuestionScreen1 from '@features/profile/Support/AskedQuestions/AskedQuestions1';
import AskedQuestionScreen2 from '@features/profile/Support/AskedQuestions/AskedQuestions2';
import { createStackNavigator } from '@react-navigation/stack';
import images from '@res/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import ChangePasswordScreen from '../features/profile/ChangePassword';
import EditScreen from '../features/profile/EditProfile';
import SettingScreen from '../features/profile/Setting';
import SupportScreen from '../features/profile/Support';

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
      <Stack.Screen
        name="edit"
        component={EditScreen}
        options={({ navigation, route }) => ({
          title: 'Thông tin tài khoản',
          headerTitleStyle: styles.headerTitleStyle,
          headerRight: () => (
            <TouchableOpacity style={styles.btnRight}>
              <Text
                style={{
                  color: '#162B75',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Lưu
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="support"
        component={SupportScreen}
        options={({ navigation, route }) => ({
          title: 'Hỗ trợ',
          headerTitleStyle: styles.headerTitleStyle,
        })}
      />
      <Stack.Screen
        name="setting"
        component={SettingScreen}
        options={({ navigation, route }) => ({
          title: 'Cài đặt',
          headerTitleStyle: styles.headerTitleStyle,
        })}
      />
      <Stack.Screen
        name="changpassword"
        component={ChangePasswordScreen}
        options={({ navigation, route }) => ({
          title: 'Thay đổi mật khẩu',
          headerTitleStyle: styles.headerTitleStyle,
        })}
      />
      <Stack.Screen
        name="askedquestions"
        component={AskedQuestionScreen}
        options={({ navigation, route }) => ({
          title: 'Các câu hỏi thường gặp',
          headerTitleStyle: styles.headerTitleStyle,
        })}
      />
      <Stack.Screen
        name="askedquestions1"
        component={AskedQuestionScreen1}
        options={({ navigation, route }) => ({
          title: 'Các câu hỏi thường gặp',
          headerTitleStyle: styles.headerTitleStyle,
        })}
      />
      <Stack.Screen
        name="askedquestions2"
        component={AskedQuestionScreen2}
        options={({ navigation, route }) => ({
          title: 'Các câu hỏi thường gặp',
          headerTitleStyle: styles.headerTitleStyle,
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
