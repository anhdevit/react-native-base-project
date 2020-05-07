/**
 * @format
 * @flow
 */

import images from '@res/icons';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { ItemCategory } from './ItemCategory';
import { fetchCategory } from '../homeSlice';

function ListCategory(props) {
  const {categorys, fetchCategory} = props;
  console.log("ListCategory -> categorys", categorys)

  useEffect(() => { fetchCategory()}, [])

  return (
    <FlatList
      horizontal
      style={styles.container}
      data={categorys}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <ItemCategory item={item}/>}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return ({
    categorys: state.home.categorys
  })
}

const mapDispatch = {
  fetchCategory,
}

export default connect(
  mapStateToProps,
  mapDispatch
)(ListCategory);


const styles = StyleSheet.create({
  container: {
    marginTop: -45
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 50,
    paddingHorizontal: 16
  },
});
