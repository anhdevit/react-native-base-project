/**
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import HTML from 'react-native-render-html';

function IntroApartment(props) {
  const { route } = props
  const { longDescription } = route.params
  return (
    <View style={styles.container} >
      <HTML
        html={`<link rel="stylesheet" href="/on/demandware.static/Sites-anhdevs_vn-Site/-/vi_VN/v1587388453000/css/product/detail.css" /> ${longDescription}`}
        stylesheet={styles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white'
  },
  p: {
    color: 'red'
  },
  'box-content': {
    backgroundColor: 'red'
  }
});

export default IntroApartment;
