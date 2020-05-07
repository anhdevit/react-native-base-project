/**
 * @format
 * @flow
 */

import colors from '@config/colors';
import images from '@res/icons';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addFavorite, addWishlistShow, removeFavorite, removeWishlistShow } from '../homeSlice';

function WishListItem(props) {
  const {
    id,
    objectDataFavorite,
    addWishlistShow,
    removeWishlistShow,
    isUseLogin
  } = props;

  const isFavorite = objectDataFavorite[id]
  const onFavorite = async () => {
    if (isFavorite) {
      await removeWishlistShow(id)
      return
    }
    await addWishlistShow(id)
  }

  if (isUseLogin) {
    return (
      <TouchableOpacity
        style={styles.buttonIcon}
        onPress={onFavorite}
      >
        <Image
          source={isFavorite ? images.ic_favorite : images.ic_heart}
          style={[styles.icon, { tintColor: colors.colorPrimary }]}
        />        
      </TouchableOpacity>
    )
  }

  return null
}

const mapStateToProps = (state, ownProps) => {
  return ({
    dataFavorite: state.home.dataFavorite,
    objectDataFavorite: state.home.objectDataFavorite,
    isUseLogin: state.auth.isUseLogin
  })
}

const mapDispatch = {
  addWishlistShow,
  addFavorite,
  removeFavorite,
  removeWishlistShow
}

export default connect(
  mapStateToProps,
  mapDispatch
)(WishListItem);

const styles = StyleSheet.create({
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
});

