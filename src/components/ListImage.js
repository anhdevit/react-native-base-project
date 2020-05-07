/**
 * @format
 * @flow
 */

import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

function ListImage(props) {
  const {
    data,
    onPress= () => {}
  } = props
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => {
        return(
        <TouchableOpacity
          onPress={() => onPress(index)}
        >
          <FastImage
            source={{ uri: item.url }}
            style={props.styleContainer}
            resizeMode={'cover'}
          />
        </TouchableOpacity>)   
      }
      }
      pagingEnabled
      horizontal
      style={props.styleContainer}
      bounces={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ListImage;
