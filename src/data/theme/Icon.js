
import React from 'react';
import { Image } from 'react-native';
import { ThemeContext } from 'src';


export default function Icon({ assets }) {
  return (
    <ThemeContext.Consumer>
      {
        (themeData) => (
          <Image source={assets} />
        )
      }
    </ThemeContext.Consumer>
  );
};
