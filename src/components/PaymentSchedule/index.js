import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';

export default function PaymentScheduleItem(props) {
  const { title, onPlus, value, onMinst, unit, index, deletePayment, edit, editable } = props;
  const { t } = useTranslation();

  const renderRightActions = ( indexPay, progress, dragX ) => {
    return (
      <RectButton style={styles.leftAction} onPress={() => deletePayment(indexPay)}>
        <Text style={styles.deleteSwipe}>{t('cart.delete')}</Text>
      </RectButton>
    );
  };

  return (
    <Swipeable renderRightActions={() => renderRightActions(index)}>
      <View style={styles.container}>
        <TextInput 
          style={styles.title}
          value={title}
          editable={editable}
          placeholder={'-- Nhập lần thanh toán --'}
          maxLength={22}
        />
        <View style={styles.box}>
          <TouchableOpacity 
            style={styles.boxBtn(edit)} 
            onPress={() => {
              onMinst(index, value)
            }}
            disabled={edit === false ? true : false}  
          >
            <Icon name="minus" size={20} />
          </TouchableOpacity>
          <TextInput 
            style={styles.input} 
            value={`${value} ${unit}`} 
            editable={false}  
          />
          <TouchableOpacity 
            style={styles.boxBtn(edit)} 
            onPress={() => {
              onPlus(index, value)
            }}
            disabled={edit === false ? true : false}
          >
            <Icon name="plus" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  );
}

PaymentScheduleItem.propTypes = {
  title: PropTypes.string,
  onMinst: PropTypes.func,
  onPlus: PropTypes.func,
  value: PropTypes.number,
  unit: PropTypes.string,
  index: PropTypes.number,
  deletePayment: PropTypes.func,
  edit: PropTypes.bool,
  editable: PropTypes.bool,
};
