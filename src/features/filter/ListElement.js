/**
 * @format
 * @flow
 */

import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '@config/colors';

function ListElement({ title, data, setValue, value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({ item }) => {
          return <Item
            name={item.display}
            onPress={() => setValue(item.display)}
            isSelected={value === item.display}
          />
        }
        }
      />
    </View>
  );
};

const Item = ({ name, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      style={[styles.button, {borderColor : isSelected ? colors.colorPrimary : '#CCCCCC'}]}
      onPress={onPress}
    >
      <Text style={styles.city}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16
  },
  title: {
    color: '#242424',
    fontSize: 17,
    fontWeight: '600'
  },
  city: {
    fontSize: 15,
    color: '#242424',
  },
  button: {
    borderWidth: 1,
    paddingBottom: 8,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 10,
    justifyContent: 'center',
    marginRight: 16,
    marginTop: 16,
    borderRadius: 8
  }
});

export default ListElement;
