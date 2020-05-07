/**
 * @format
 * @flow
 */

import images from '@res/icons';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BannerItem from './BannerItem';
import { navigate } from '@navigation/RootNavigation';
import colors from '@config/colors';

const exampleData = [
  {
    image: images.Banner,
  },
  {
    image: images.Banner,
  },
  {
    image: images.Banner,
  },
  {
    image: images.Banner,
  }
]

function ListForSale() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ưu đãi cho khách hàng</Text>
        <TouchableOpacity onPress={() => navigate('banner')}>
          <Text style={styles.textMore}>Xem thêm</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatlist}
        horizontal
        data={exampleData}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({ item }) =>
          <BannerItem url={item.image} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16
  },
  title: {
    fontSize: 17,
    color: colors.colorPrimary,
    fontWeight: '600'
  },
  flatlist: {
    marginTop: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    alignItems: 'center'
  },
  textMore: {
    fontSize: 13,
    color: '#162B75'
  },
  viewFooterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textFooter: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold'
  },
  viewFooterEnd: {
    paddingLeft: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
    alignItems: 'flex-end',
  },
  textFooterEnd: {
    color: '#FDB913',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ListForSale;
