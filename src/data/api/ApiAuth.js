// import { AuthApiConstants } from 'src/constants/AuthApiConstants'
import { method, requestAPI, instanceApiService, returnFormData } from './index'
// PATH

const signin = 'WsMobile-Signin'
const account = 'WsMobile-Active_account'
const forgot_pass = 'WsMobile-Forgot_password'
const resen_dotp = 'WsMobile-Resend_otp'
const sign_up = 'WsMobile-Signup'
const verify_otp = 'WsMobile-Verify_otp'
const update_password = 'WsMobile-Update_password'
const update_info = 'WsMobile-Update_info'


export async function loginApi(email, password, grecaptcha_token) {
  const response = await instanceApiService.post(
    signin,
    null,
    {
      headers: {
        username: email,
        password,
        grecaptcha_token,
      }
    });
    return response.data;
}

export async function signUpApi(data, grecaptcha_token) {
  const body = {
    lastName: data.lastName,
    firstName: data.firstName,
    phone: data.phone,
    email: data.email,
    password: data.password,
    passwordConfirm: data.passwordConfirm,
    subscribeEmail: data.subscribeEmail,
    confirmActivated: data.confirmActivated,
    grecaptcha_token: grecaptcha_token,
  }

  const form = returnFormData(body)

  var response = await instanceApiService.post(
    sign_up,
    form
  );
  return response.data;
}

export async function activeAccount(email, grecaptcha_token, lostpassflag, confirmActivated) {
  const body = { email, grecaptcha_token, lostpassflag, confirmActivated }
  const form = returnFormData(body)
  const response = await instanceApiService.post(
    account,
    form
  );
  return response.data
}

export async function forgotPassword(otp, grecaptcha_token, newpass) {
  const body = {
    otp,
    grecaptcha_token,
    newpass
  }
  const form = returnFormData(body)
  var response = await instanceApiService.post(
    forgot_pass,
    form
  );

  return await response.data;
}

export async function resendOtp(grecaptcha_token) {
  const body = { grecaptcha_token }
  const form = returnFormData(body)
  var response = await instanceApiService.post(
    resen_dotp,
    form
  );
  return await response.data;
}

export async function verifyOtp(otp, grecaptcha_token) {
  const body = { otp, grecaptcha_token }
  const form = returnFormData(body)
  var response = await instanceApiService.post(
    verify_otp,
    form
  );
  return await response.data;
}

export async function updatePass(oldpass, newpass) {
  const params = { oldpass, newpass }
  var response = await instanceApiService.post(
    update_password,
    null,
    {
      params
    }
  );
  return await response.data;
}

export async function updateInfo(firstName, lastName, phone, password) {
  const params = { firstName, lastName, phone, password}
  var response = await instanceApiService.post(
    update_info,
    null,
    {
      params
    }
  );
  return await response.data;
}
