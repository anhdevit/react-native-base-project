/**
 * @format
 * @flow
 */

import colors from '@config/colors';
import { navigate } from '@navigation/RootNavigation';
import React, {useEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { fetchHotProduct } from '../homeSlice';
import { connect } from 'react-redux';
import DepartmentItem from './DepartmentItem';

function ListHotProduct(props) {
  const {dataHotProduct, fetchHotProduct} = props;
  console.log("ListHotProduct -> dataHotProduct", dataHotProduct)

  useEffect(() => { fetchHotProduct()}, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bất động sản ưu đãi</Text>
        <Text
          style={styles.textMore}
          onPress={() => navigate('hotProduct', {data: dataHotProduct})}
        >Xem thêm</Text>
      </View>
      <FlatList
        style={styles.flatlist}
        horizontal
        data={dataHotProduct}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          <DepartmentItem
            item={item}
            styleCustom={styles.item}
            navigation={props.navigation}
          />}
        showsHorizontalScrollIndicator={false}
      />
    </View>

  );
};

const mapStateToProps = (state, ownProps) => {
  return ({
    dataHotProduct: state.home.dataHotProduct
  })
}

const mapDispatch = {
  fetchHotProduct,
}

export default connect(
  mapStateToProps,
  mapDispatch
)(ListHotProduct);

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 16
  },
  item: {
    marginLeft: 16,
    width: wp('75%'),
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

