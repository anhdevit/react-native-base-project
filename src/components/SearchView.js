import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import colors from '@config/colors';
import { FONT_FAMILY } from '@config/typography';

function SearchView({
  onRef,
  maxLength,
  inputStyle,
  placeholder,
  placeholderTextColor,
  multiline,
  onChangeValue,
  onSubmit,
  type,
}) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const textField = useRef(null);

  useEffect(() => {
    onRef(textField.current);
  }, []);

  return (
    <View>
      <TextField
        ref={textField}
        maxLength={maxLength ? maxLength : null}
        containerStyle={styles.containerInput}
        inputContainerStyle={styles.wrapperInput}
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
        onChangeText={(val) => {
          setValue(val);
          if (val.length > 0) {
            if (error) {
              setError('');
            }
          }
          if (onChangeValue) {
            onChangeValue(val.trim());
          }
        }}
        error={error}
        errorColor={colors.red01}
        value={value}
        autoCorrect={false}
        onSubmitEditing={onSubmit ? onSubmit : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    flex: 1,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 40,
    borderRadius: 4,
    backgroundColor: colors.grayBackground
  },
  wrapperInput: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: -8,
  },
  valueStyle: {
    color: colors.ColorBody,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 15,
    letterSpacing: -0.24,
    paddingHorizontal: 10,
    minHeight: 40,
  },
});

export default SearchView;
