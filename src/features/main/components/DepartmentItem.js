/**
 * @format
 * @flow
 */

import ItemHome from '@components/ItemHome';
import colors from '@config/colors';
import { useNavigation } from '@react-navigation/native';
import images from '@res/icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { stylesCommon } from 'src/data/theme/stylesCommon';
import WishListItem from './WishListItem';

function DepartmentItem(props) {
  const {
    styleCustom,
    styleBg,
    item,
  } = props;

  const { navigate } = useNavigation()

  return (
    <TouchableOpacity
      style={[styles.container, styleCustom]}
      activeOpacity={1}
      onPress={() => navigate('detailApartment', { item })}
    >
      <View style={[styles.bg, styleBg]}>
        <FastImage source={{ uri: item?.getPhoto() }} style={[styles.bg, styleBg]} resizeMode='cover' />
        <View style={styles.viewTitle}>
          <View style={styles.viewOpacity} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <WishListItem id={item.id}/>
      </View>
      <View style={styles.viewFooter}>
        <Text
          style={styles.titleHome}
          numberOfLines={1}
        >{item.name}</Text>
        <View style={styles.viewItemHome}>
          <ItemHome icon={images.ic_bed} title={item.getNumberBed()} />
          <ItemHome icon={images.ic_m2} title={item.getCarpetArea()} />
          <ItemHome icon={images.ic_bathroom} title={item.getNumberBath()} />
          <ItemHome icon={images.ic_compass} title={item.getDirection()} />
        </View>
        <View style={styles.viewFooterEnd}>
          <Text style={styles.titleprice}>Giá niêm yết</Text>
          <Text
            style={styles.price}
            numberOfLines={1}
          >{item.getPrice()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const mapStateToProps = (state, ownProps) => {
  return ({
    dataFavorite: state.home.dataFavorite,
    objectDataFavorite: state.home.objectDataFavorite
  })
}

export default connect(
  mapStateToProps,
  null
)(DepartmentItem);

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    backgroundColor: 'white',
    borderRadius: 6,
    marginVertical: 10,
    ...stylesCommon.shadows
  },
  buttonIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
    backgroundColor: 'white',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FDB913'
  },
  icon: {
    tintColor: '#FDB913'
  },
  viewTitle: {
    position: 'absolute',
    bottom: 0,
  },
  viewOpacity: {
    backgroundColor: colors.colorPrimary,
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.8
  },
  bg: {
    width: wp('75%'),
    height: hp('20%'),
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: colors.gray200
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    fontWeight: '600',
    marginHorizontal: 18,
    marginVertical: 8,
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
    marginTop: 8,
    flex: 1
  },
  titleprice: {
    fontSize: 15,
  },
  price: {
    color: colors.colorPrimary,
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 16,
    flex: 1,
    textAlign: 'right'
  },
  titleHome: {
    fontSize: 17,
    fontFamily: 'OpenSans-Regular',
    marginTop: 8,
  },
  viewItemHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
});

