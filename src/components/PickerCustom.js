import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '@config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FONT_FAMILY } from '@config/typography';

const ios = Platform.OS == 'ios' ? true : false;

class PickerCustom extends PureComponent {
  state = {
    value: this.props.defaultValue ? this.props.defaultValue : '',
    error: '',
  };

  componentDidMount() {
    if (this.props.onRef) this.props.onRef(this);
  }
  componentWillUnmount() {
    if (this.props.onRef) this.props.onRef(undefined);
  }

  render() {
    let { containerStyle, header, required, data } = this.props;

    return (
      <View style={[styles.resTr, containerStyle]}>
        {header ? (
          <Text style={styles.headerStyle}>
            {header}
            {required && <Text style={styles.required}> *</Text>}
          </Text>
        ) : null}
        <View style={styles.containerInput}>
          <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={value => this.setState({ value: value })}
            items={data}
            // placeholder={data[0]}
            value={this.state.value}
            Icon={() => (
              <AntDesign
                name="caretdown"
                color={colors.TextLink}
                size={10}
                style={{ marginTop: 14, marginRight: 10 }}
              />
            )}
          />
        </View>
      </View>
    );
  }

  setValue = value => {
    try {
      if (!value) {
        this.showError('');
      }
      this.setState({ value });
    } catch (error) {}
  };
  getValue = () => this.state.value.trim();
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: colors.ColorBody,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 15,
    height: 40,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    paddingVertical: 8,
    color: colors.ColorBody,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 15,
    height: 40,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 11,
    fontFamily: ios ? FONT_FAMILY.LIGHT : FONT_FAMILY.REGULAR,
    color: colors.ColorBody,
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginBottom: 4,
  },
  resTr: {},
  containerInput: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: colors.border,
  },
  required: {
    color: colors.red,
    fontSize: 11,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});

export default PickerCustom;
