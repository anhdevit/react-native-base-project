import React from 'react';
import { TextMask } from 'react-native-masked-text';

const TextPriceCommon = ({ style, value, suffixUnit }) => {
  return (
    <TextMask
      style={style}
      value={value}
      type={'money'}
      options={{
        obfuscated: true,
        precision: 0,
        separator: '.',
        delimiter: '.',
        unit: '',
        suffixUnit: suffixUnit,
      }}
    />
  );
};

export default TextPriceCommon;
