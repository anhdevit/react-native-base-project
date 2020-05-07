import TextInputFeild from '@components/TextInputFeild';
import { callApiUpdatePassword } from '@features/auth/authSlice';
import images from '@res/icons';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { regexPassword } from 'src/utility';
import styles from './styles';


function EditProfile(props) {
  const { navigation, callApiUpdatePassword } = props
  const { t } = useTranslation();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [verifyNewPassword, setVerifyNewPassword] = useState('');

  const saveNewPassword = async () => {
    if (oldPassword === '') {
      return Alert.alert('Bạn cần nhập mật khẩu cũ')
    }
    if (!regexPassword(oldPassword)) {
      return Alert.alert(t('alert.wrongPassword'))
    }
    if (newPassword === '') {
      return Alert.alert('Bạn cần nhập mật khẩu mới')
    }
    if (!regexPassword(newPassword)) {
      return Alert.alert(t('alert.wrongPassword'))
    }
    if (newPassword !== verifyNewPassword) {
      return Alert.alert(t('alert.wrongPasswordRegister'))
    }
    await callApiUpdatePassword(oldPassword, newPassword)
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.btnRight}
          onPress={saveNewPassword}
        >
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
    });
  }, [oldPassword, newPassword, verifyNewPassword ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mật khẩu hiện tại:</Text>
      <TextInputFeild
        icon={images.ic_user_edit}
        onChangeText={text => setOldPassword(text)}
        placeHolder={'Nhập mật khẩu hiện tại'}
        value={oldPassword}
        styleContainer={styles.boxInput}
        secureTextEntry
      />
      <Text style={styles.title}>Mật khẩu mới:</Text>
      <TextInputFeild
        icon={images.ic_user_edit}
        value={newPassword}
        placeHolder={'Nhập mật khẩu mới'}
        onChangeText={text => setNewPassword(text)}
        styleContainer={styles.boxInput}
        secureTextEntry
      />
      <TextInputFeild
        icon={images.ic_user_edit}
        value={verifyNewPassword}
        placeHolder={'Nhập lại mật khẩu mới'}
        onChangeText={text => setVerifyNewPassword(text)}
        styleContainer={styles.boxInput}
        secureTextEntry
      />
    </View>
  );
}

const mapPropsToState = state => ({
});

const mapDispatch = {
  callApiUpdatePassword
};

export default connect(
  mapPropsToState,
  mapDispatch,
)(EditProfile);
