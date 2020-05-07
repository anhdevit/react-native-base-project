import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: true,
    isUseLogin: false,
    userToken: null,
    userInfo: {},
    dataUser: {},
    listUserName: [],
    dataUserHome: [],
    dataSearch: []
  },
  reducers: {
    signIn(state, action){
        state.userToken = action.payload.userName
        state.userInfo =  action.payload
        state.isLoading = false
        state.isUseLogin = true
    },
    updateUserInfo: {
      reducer(state, action) {
        const { firstName, lastName } = action.payload;
        state.userInfo.firstName = firstName
        state.userInfo.lastName = lastName
      },
      prepare(firstName, lastName) {
        return { payload: { firstName, lastName } }
      }
    },
    signUp(state, action) {
      const data = action.payload
      state.dataUser[data.userName] = data;
      state.listUserName.push(data.userName)
    },
    signout(state, action) {
      state.isUseLogin = false
      state.userToken = null
      state.isUserInternal = false
      state.userInfo = {}
      state.type = ''
    },
    setDataUserHome(state, action) {
      state.dataUserHome = action.payload
    },
    setDataSearch(state, action) {
      state.dataSearch = action.payload
    },
  }
})


export const authReducer = authSlice.reducer
