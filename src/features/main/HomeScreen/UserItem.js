/**
 * @format
 * @flow
 */

import colors from '@config/colors';
import { navigate } from '@navigation/RootNavigation';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

function UserItem({ item }) {
  console.log("FavoriteItem -> item", item)
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
    // TODO: Favorite
    // onPress={() => navigate('detailApartment', { item })}
    >
      <Image source={{ uri: 'https://media-a.laodong.vn/Storage/NewsPortal/2019/8/21/750466/Sinh-Nhat-Mot-Ong-Em-01.jpg?w=414&h=276&crop=auto&scale=both' }} style={styles.bg} resizeMode='cover' />
      <View style={styles.viewFooter}>
        <Text style={styles.title}>{item.fullName}</Text>
        <Text style={styles.titleHome}>{item.userName}</Text>
        <Text style={styles.titleHome}>{item.email}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    backgroundColor: 'white',
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 0.5
  },
  bg: {
    width: wp('30%'),
    height: hp('10%'),
    borderRadius: 6,
    backgroundColor: colors.gray200
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
    fontWeight: '600',
    color: colors.colorPrimary
  },
  viewFooter: {
    flex: 1,
    width: '100%',
    padding: 16,
    justifyContent: 'space-between',
  },
  viewFooterEnd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 8
  },
  titleprice: {
    fontSize: 15,
  },
  price: {
    color: colors.colorPrimary,
    fontSize: 15,
    fontWeight: '600',
  },
  titleHome: {
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
    marginTop: 8,
  },
});

export default UserItem;
