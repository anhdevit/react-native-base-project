import TextInputFeild from '@components/TextInputFeild';
import { Colors } from '@config/index';
import { callApiUpdateInfo } from '@features/auth/authSlice';
import images from '@res/icons';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';


function EditProfile(props) {
  const { userInfo, navigation, callApiUpdateInfo } = props
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState(userInfo.fullName);
  const [lastName, setLastName] = useState(userInfo.userName);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phone);
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState('');

  const showDialogTexinput = () => {
    setModalVisible(true)
  }

  const saveInfo = async () => {
    setModalVisible(false)
    await callApiUpdateInfo(firstName, lastName, phoneNumber, password)
    setPassword('')
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.btnRight}
          onPress={showDialogTexinput}
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
  }, [firstName, lastName, phoneNumber, password]);

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        // transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.innerContainer}>
            <Text>Bạn cần nhập mật khẩu</Text>
            <TextInputFeild
              icon={images.ic_pass}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry
              styleContainer={styles.boxInput}
            />
            <Button
              onPress={saveInfo}
              title="Lưu"
            >
            </Button>
          </View>
        </View>
      </Modal>
      <View style={styles.boxUserIg}>
        <View style={styles.ig_user}>
          <Image source={images.ic_user} style={{ tintColor: '#FFFFFF' }} />
        </View>
        <TouchableOpacity>
          <Text style={styles.txtChangeImage}>
            {t('user.change_image_user')}
          </Text>
        </TouchableOpacity>
      </View>
      <TextInputFeild
        icon={images.ic_user_edit}
        onChangeText={text => setFirstName(text)}
        placeHolder={t('auth.fullName')}
        value={firstName}
        styleContainer={styles.boxInput}
      />
      <TextInputFeild
        icon={images.ic_user_edit}
        value={lastName}
        placeHolder={t('auth.userName')}
        onChangeText={text => setLastName(text)}
        styleContainer={styles.boxInput}
      />
      <TextInputFeild
        icon={images.ic_phone_edit}
        value={phoneNumber}
        editable={false}
        placeHolder={t('auth.phone')}
        onChangeText={text => setPhoneNumber(text)}
        styleContainer={styles.boxInput}
      />
      <TextInputFeild
        icon={images.ic_email_edit}
        value={userInfo.email}
        editable={false}
        placeholderTextColor={Colors.iconColor}
        styleContainer={styles.boxInput}
      />
    </View>
  );
}

const mapPropsToState = state => ({
  userInfo: state.auth.userInfo,
});

const mapDispatch = {
  callApiUpdateInfo
};

export default connect(
  mapPropsToState,
  mapDispatch,
)(EditProfile);
