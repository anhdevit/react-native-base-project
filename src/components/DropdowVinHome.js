import colors from '@config/colors';
import { Colors, Typography } from '@config/index';
import { PropTypes } from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Dropdowanhdev(props) {
  const { t } = useTranslation();
  const { data, onChangText, value, onPlus, onMinst, indexModel, unit, onDeletePolicy } = props;

  const renderRightActions = (index, dragX) => {
    return (
      <RectButton style={styles.leftAction} onPress={() => onDeletePolicy(index)}>
       <Text style={styles.deleteSwipe}>{t('cart.delete')}</Text>
      </RectButton>  
    );
  };

  return (
    <Swipeable renderRightActions={() => renderRightActions(indexModel)}>
      <View style={styles.box}>
        <Dropdown
          containerStyle={styles.boxDropdown}
          data={data}
          inputContainerStyle={styles.input_container}
          onChangeText={onChangText}
          value={data[0].label}
        />
        <TouchableOpacity
          style={styles.boxBtn(value)}
          onPress={() => {
            onMinst(indexModel, value);
          }}
          disabled={value === 0 ? true : false}>
          <Icon name="minus" size={20} />
        </TouchableOpacity>
        <TextInput 
          style={styles.input} 
          value={`${value} ${unit ? 'Tr' : '%' }`} 
          editable={false}
        />
        <TouchableOpacity
          style={styles.boxBtn(value)}
          onPress={() => {
            onPlus(indexModel, value);
          }}
          disabled={value === 0 ? true : false}>
          <Icon name="plus" size={20} />
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
}
Dropdowanhdev.propTypes = {
  data: PropTypes.array,
  onChangText: PropTypes.func,
  value: PropTypes.number,
  onMinst: PropTypes.func,
  onPlus: PropTypes.func,
  indexModel: PropTypes.number,
  unit: PropTypes.bool,
  onDeletePolicy: PropTypes.func,
};

const styles = StyleSheet.create({
  boxDropdown: {
    flex: 1,
    marginRight: 20,
    backgroundColor: colors.background,
    borderColor: '#CDCDCD',
    borderWidth: 0.5,
    height: 35,
    borderRadius: 7,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxBtn: value => ({
    borderColor: '#CDCDCD',
    borderWidth: 0.5,
    height: 36,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 3,
    backgroundColor: value === 0 ? colors.border : colors.background,
  }),
  input: {
    width: 55,
    height: 39,
    paddingBottom: Platform.OS === 'android' ? 8  : 0,
    paddingTop: Platform.OS === 'android' ? 8  : 0,
    fontSize: 17,
    color: Colors.ColorBody,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.background,
    marginHorizontal: 10,
    borderColor: Colors.border,
    borderWidth: 0.5,
  },
  white: {
    backgroundColor: colors.backgroundColor,
  },
  leftAction: {
    alignSelf: 'center',
    padding: 10,
    backgroundColor: Colors.red,
  },
  deleteSwipe: {
    color: Colors.background,
    fontFamily: Typography.FONT_FAMILY.REGULAR,
    fontSize: 13,
    display: 'flex',
  },
  input_container: {
    borderBottomColor: 'transparent',
    marginVertical: -27,
    marginLeft: 10,
  },
});
