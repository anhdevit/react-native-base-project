import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Slider from 'react-native-slider';
import { PropTypes } from 'prop-types';
import { Colors, Typography } from '@config/index';

export default function Slideranhdev(props) {
  const { 
    title, 
    onPlus, 
    onMinst, 
    valueText, 
    valueSlider, 
    minimumValue, 
    maximumValue, 
    onValueChange 
  } = props;

  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.label}>{title}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Slider
          trackStyle={styles.trackStyle}
          thumbStyle={styles.thumbStyle}
          minimumTrackTintColor={Colors.gradient}
          maximumTrackTintColor={Colors.gradient}
          value={valueSlider}
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          style={styles.slider}
          onValueChange={onValueChange}
        />
        <TouchableOpacity style={styles.boxBtn} onPress={onMinst}>
          <Icon name="minus" size={20} />
        </TouchableOpacity>
        <TextInput style={styles.input} value={valueText} />
        <TouchableOpacity style={styles.boxBtn} onPress={onPlus}>
          <Icon name="plus" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

Slideranhdev.propTypes = {
  title: PropTypes.string,
  onPlus: PropTypes.func,
  onMinst: PropTypes.func,
  valueText: PropTypes.string,
  valueSlider: PropTypes.number,
  minimumValue: PropTypes.number,
  maximumValue: PropTypes.number,
  onValueChange: PropTypes.func,
};

const styles = StyleSheet.create({
  trackStyle: {
    backgroundColor: Colors.gradient,
  },
  thumbStyle: {
    backgroundColor: Colors.colorPrimary,
  },
  boxBtn: {
    borderColor: Colors.border,
    borderWidth: 0.5,
    height: 36,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 3,
    backgroundColor: Colors.grayBackground,
  },
  input: {
    fontSize: Typography.FONT_SIZE.BASE,
    fontFamily: Typography.FONT_FAMILY.REGULAR,
    color: Colors.ColorBody,
    width: 55,
    height: 36,
    borderColor: Colors.border,
    borderWidth: 0.5,
    marginHorizontal: 7,
    borderRadius: 7,
    backgroundColor: Colors.background,
    textAlign: 'center',
    paddingBottom: Platform.OS === 'android' ? 8 : 0,
  },
  slider: {
    flex: 1,
    marginRight: 10,
  }
});
