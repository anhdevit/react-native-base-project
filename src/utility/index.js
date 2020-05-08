// import { Alert } from "react-native";

export const regexPassword = password => {
  var strongRegex = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,32})',
  );
  return strongRegex.test(password);
};

export const regexEmail = email => {
  var strongRegex = new RegExp(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  );
  return strongRegex.test(email);
};

export const showAlert = message => {
  Alert.alert(
    '',
    message,
    [{ text: 'Đóng', onPress: () => console.log('Ask me later pressed') }],
    { cancelable: false },
  );
};

export const regexPhone = phone => {
  var strongRegex = new RegExp(/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/g);
  return strongRegex.test(phone);
};

import { signInInsideApp } from "@features/auth/authSlice";
import { Alert, Linking, Platform } from 'react-native';
import i18n from '../translations/vi.json';

const ios = Platform.OS == 'ios' ? true : false;

export const goToAppSettings = text => {
  // Permissions.request("camera").then(response => {
  //   if (response === "authorized") {
  //     callback(response);
  //   }
  if (ios) {
    // if (response === "denied") {
    Alert.alert(text, '', [
      {
        text: i18n.checkout.go_to_settings_menu,
        onPress: Permissions.openSettings,
      },
    ]);
    // }
  } else {
    // if (response === "restricted") {
    Alert.alert(text, '', [
      {
        text: i18n.checkout.go_to_settings_menu,
        onPress: () => AndroidOpenSettings.appDetailsSettings(),
      },
    ]);
    // }
  }
  // });
};

export const showAlertWithInteract = (message, onPress) => {
  Alert.alert(
    '',
    message,
    [
      {text: 'Đóng'},
      {text: 'Đồng ý', onPress: () =>  {
        onPress ? onPress() : null
      }},
    ],
    { cancelable: false }
  )
}

export const showAlertRequiredLogin = (message) => {
  Alert.alert(
    '',
    message,
    [
      {text: 'Đóng', onPress: () => console.log('Ask me later pressed')},
      {text: 'Login', onPress: () => signInInsideApp(),
      style: 'destructive'
    },
    ],
    { cancelable: false },
  );
};

export const formatFloorNum = input => {
  switch (input) {
    case 4:
      return '5A';
    case 7:
      return '8A';
    case 13:
      return '12A';
    case 24:
      return '25A';
    default:
      return input;
  }
};

export function formatMoney(
  amount,
  decimalCount = 0,
  decimal = '.',
  thousands = ',',
) {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)),
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
}

// year

function isLeapYear(year ) {
  return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}

function getDaysInMonth(year, month ) {
  return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

export function addMonths(date, value ) {
  let d = new Date(date ),
      n = d.getDate();
  
  d.setDate(1);
  d.setMonth(d.getMonth() + value );
  d.setDate(Math.min(n, getDaysInMonth(d.getFullYear(), d.getMonth() )));

  let day = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear();

  return day + '/' + month + '/' + year;
}

export const linkPhone = (phoneNumber) => {
  let phone = '';
  
  if (Platform.OS === 'android') { 
    phone = `tel:${phoneNumber}`; 
  }else {
    phone = `telprompt:${phoneNumber}`; 
  }

  return Linking.openURL(phone);
}

export function roundUp(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}
