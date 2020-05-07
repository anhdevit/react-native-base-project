import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import colors from '@config/colors';
import styles from './styles';

class InputTextCustom extends PureComponent {
  state = {
    value: this.props.defaultValue ? this.props.defaultValue : '',
    error: '',
  };

  componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this);
    }
  }
  componentWillUnmount() {
    if (this.props.onRef) {
      this.props.onRef(undefined);
    }
  }

  render() {
    let {
      containerStyle,
      containerInput,
      wrapperInput,
      inputStyle,
      placeholder,
      placeholderTextColor,
      multiline,
      onChangeValue,
      type,
      onSubmit,
      header,
      maxLength,
      required,
      returnKeyType,
    } = this.props;

    return (
      <View style={[styles.resTr, containerStyle]}>
        {header ? (
          <Text style={styles.headerStyle}>
            {header}
            {required && <Text style={styles.required}> *</Text>}
          </Text>
        ) : null}
        <TextField
          ref="textField"
          maxLength={maxLength ? maxLength : null}
          containerStyle={[styles.containerInput, containerInput]}
          inputContainerStyle={[styles.wrapperInput, wrapperInput]}
          inputContainerPadding={0}
          contentInset={{
            top: 0,
            label: 0,
            input: 0,
          }}
          style={[styles.valueStyle, inputStyle]}
          labelHeight={0}
          selectionColor={colors.colorPrimary}
          tintColor={'transparent'}
          keyboardType={type ? type : 'default'}
          placeholder={placeholder ? placeholder : ''}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : colors.textColor
          }
          lineWidth={0}
          editable={true}
          multiline={multiline ? true : false}
          autoCapitalize={'none'}
          onChangeText={val => {
            let value = val;
            this.setState({ value });
            if (val.length > 0) {
              if (this.state.error) {
                this.setState({ error: '' });
              }
            }
            if (onChangeValue) {
              onChangeValue(val.trim());
            }
          }}
          error={this.state.error}
          errorColor={colors.red}
          value={this.state.value}
          autoCorrect={false}
          onSubmitEditing={onSubmit ? onSubmit : null}
          returnKeyType={returnKeyType ? returnKeyType : null}
        />
      </View>
    );
  }

  showError = error => this.setState({ error });
  setValue = value => {
    try {
      if (!value) {
        this.showError('');
      }
      this.setState({ value });
      this.refs.textField.setValue(value);
    } catch (error) {}
  };
  getValue = () => this.state.value.trim();
}

export default InputTextCustom;
