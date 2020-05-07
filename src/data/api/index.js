import { store } from '@reducers/store';
import { Alert } from 'react-native';
import { callActionSignOut } from '../../features/auth/authSlice';
//For Axios
const axios = require('axios').default;

//Config Basic Auth => Chỉ dùng cho development
// axios.defaults.auth = {
//   username: 'storefront',
//   password: 'storefront1',
// };
export const instanceApiService = axios.create({
  baseURL:
    '',
  timeout: 10000,
});

instanceApiService.defaults.headers['Authorization'] = 'Basic c3RvcmVmcm9udDpzdG9yZWZyb250MQ==';

//Inject Token cho các API cần.
instanceApiService.interceptors.request.use(function(config) {
  //TODO xem config.url nào cần token thì thêm
  // if (checkApiUseToken(config.url)) {
    const token = store.getState().auth.userToken;
    if (token) {
      // console.log("token", token)
      config.headers['token'] = token;
    }
  // }
  return config;
});

//Validate trong case hết hạn
instanceApiService.interceptors.response.use(function(response) {
  //Check response.data
  if (response.data.code === "EXPIRE") {
    Alert.alert(
      null,
      'Bạn cần đăng nhập để thực hiện',
      [
        { text: 'OK', onPress: () =>   store.dispatch(callActionSignOut())},
      ],
    )
    return
  }
  return response;
});

//Print Log Request
instanceApiService.interceptors.request.use(
  function(config) {
    console.log(`=================================`);
    console.log(`Call API: ${config.url}`, config);
    console.log(`=================================`);
    return config;
  },
  function(error) {
    return Promise.reject(error);
  },
);

//Print Log Response
instanceApiService.interceptors.response.use(
  function(response) {
    console.log(`=================================`);
    console.log(`Call API Response: ${response.config.url}`, response);
    console.log(`================================= `);
    return response;
  },
  function(error) {
    return Promise.reject(error);
  },
);

const keyUrls = ['Cart', 'Order', 'Update', 'Wishlist', 'Unc_list'];
const checkApiUseToken = path => {
  if (keyUrls.filter(x => path.includes(x)).length) {
    return true;
  }
  return false;
};

export const returnFormData = body => {
  const formdata = new FormData();
  const arrayBody = Object.keys(body);
  arrayBody.map(item => {
    formdata.append(item, body[item]);
  });
  return formdata;
};
