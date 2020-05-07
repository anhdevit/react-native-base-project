import { stopLoad } from '@features/loading/modules/actions';
import { goBack, navigate } from '@navigation/RootNavigation';
import { Alert } from 'react-native';
import { updateInfo, updatePass } from 'src/data/api/ApiAuth';
import { showAlert } from 'src/utility';
import { authSlice } from './authReducer';


export const { signIn, signout, updateUserInfo, signUp, setDataUserHome, setDataSearch } = authSlice.actions

export const callActionSignOut = () => async (dispatch) => {
  dispatch(signout())
}

export const callApiSignUp = (data) => async (dispatch, getState) => {
  console.log("callApiSignUp -> data", data)
  try {
    const { userName } = data;
    const dataUser = getState().auth
    if (!dataUser[userName]) {
      dispatch(signUp(data))
      dispatch(stopLoad())
      return navigate('RegisterSuccess')
    }
    setTimeout(() => {
      showAlert('Tài khoản đã tồn tại')
    }, 300);
  } catch (e) {
    console.log("callApiSignUp -> e", e)
    dispatch(stopLoad())
  }
}


export const callApiSignIn = (username, password,) => async (dispatch, getState) => {
  try {
    const dataUser = getState().auth.dataUser
    dispatch(stopLoad())
    const userInfo = dataUser[username]
    if (userInfo) {
      console.log("callApiSignIn -> userInfo", userInfo)
      if (userInfo.userName === username && userInfo.password === password) {
        dispatch(signIn(userInfo))
        return
      }
    }
    setTimeout(() => {
      showAlert('Vui lòng kiểm tra lại tên đăng nhập và mật khẩu')
    }, 300);
  } catch (error) {
    dispatch(stopLoad())
  }
}

export const callApiUpdateInfo = (firstName, lastName, phone, password) => async (dispatch) => {
  try {
    const response = await updateInfo(firstName, lastName, phone, password)
    dispatch(stopLoad())
    if (response.success) {
      dispatch(updateUserInfo(firstName, lastName))
      Alert.alert(response.msg ? response.msg : 'Cập nhật thông tin thành công')
      goBack();
      return
    }
    setTimeout(() => {
      showAlert(response.msg ? response.msg : 'Vui lòng thử lại')
    }, 300);
  } catch (error) {
    dispatch(stopLoad())
  }
}

export const callApiUpdatePassword = (ordPassword, newPassword) => async (dispatch) => {
  try {
    const response = await updatePass(ordPassword, newPassword)
    dispatch(stopLoad())
    if (response.success) {
      Alert.alert(response.msg)
      goBack();
      return
    }
    setTimeout(() => {
      showAlert(response.msg ? response.msg : 'Vui lòng thử lại')
    }, 300);
  } catch (error) {
    dispatch(stopLoad())
  }
}

export const fetchDataUserHome = (start, sz) => async (dispatch, getState) => {
  try {
    const listUserName = getState().auth.listUserName
    return listUserName.slice(start, sz)
  } catch (error) {
  }
}

export const fetchDataUserHomeSearch = (start, sz) => async (dispatch, getState) => {
  try {
    const listUserName = getState().auth.listUserName
    return listUserName.slice(start, sz)
  } catch (error) {
  }
}
