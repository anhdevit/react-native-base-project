
import React from 'react';
import { Text } from 'react-native';
import { ThemeContext } from 'src';


export function Title1({ children }) {
  return (
    <ThemeContext.Consumer>
      {
        (themeData) => (
          <Text style={themeData.textStyle.Title1}>{children}</Text>
        )
      }
    </ThemeContext.Consumer>
  );
};

export function Title2({ children }) {
  return (
    <ThemeContext.Consumer>
      {
        (themeData) => (
          <Text style={themeData.textStyle.Title2}>{children}</Text>
        )
      }
    </ThemeContext.Consumer>
  );
};

export function Title3({ children }) {
  return (
    <ThemeContext.Consumer>
      {
        (themeData) => (
          <Text style={themeData.textStyle.Title3}>{children}</Text>
        )
      }
    </ThemeContext.Consumer>
  );
};

export function Headline({ children }) {
  return (
    <ThemeContext.Consumer>
      {
        (themeData) => (
          <Text style={themeData.textStyle.Headline}>{children}</Text>
        )
      }
    </ThemeContext.Consumer>
  );
};

export function Body({ children }) {
  return (
    <ThemeContext.Consumer>
      {
        (themeData) => (
          <Text style={themeData.textStyle.Body}>{children}</Text>
        )
      }
    </ThemeContext.Consumer>
  );
};

export function Callout({ children }) {
  return (
    <ThemeContext.Consumer>
      {
        (themeData) => (
          <Text style={themeData.textStyle.Callout}>{children}</Text>
        )
      }
    </ThemeContext.Consumer>
  );
};

export function Button({ children }) {
  return (
    <ThemeContext.Consumer>
      {
        (themeData) => (
          <Text style={themeData.textStyle.Button}>{children}</Text>
        )
      }
    </ThemeContext.Consumer>
  );
};

export function Caption({ children }) {
  return (
    <ThemeContext.Consumer>
      {
        (themeData) => (
          <Text style={themeData.textStyle.Caption}>{children}</Text>
        )
      }
    </ThemeContext.Consumer>
  );
};



