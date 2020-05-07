/**
 * @format
 * @flow
 */

import FlatlistCustom from '@components/FlatlistCustom';
import React from 'react';
import { StyleSheet } from 'react-native';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import {fetchDataUserHome,setDataUserHome } from '../../auth/authSlice';

function HomeScreen(props) {
  const { dataUserHome, dataUser, fetchDataUserHome, setDataUserHome } = props
  console.log("HomeScreen -> dataUserHome", dataUserHome)

  const onCallbackInitPage = result => {
  console.log("HomeScreen -> result", result)
    setDataUserHome(result)
  };

  const callbackLoadMore = result => {
  console.log("HomeScreen -> result", result)
    setDataUserHome([...dataUserHome, ...result])
  };

  return (
    <FlatlistCustom
      data={dataUserHome}
      keyExtractor={(item, index) =>
        item.idPost ? item.idPost.toString() : index.toString()
      }
      renderItem={({ item, index }) => {
        const data = dataUser[item]
        return (
          <UserItem
            item={data}
          />
        )
      }}
      getListDataApi={fetchDataUserHome}
      onCallbackInitPage={onCallbackInitPage}
      callbackLoadMore={callbackLoadMore}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return ({
    dataUserHome: state.auth.dataUserHome,
    dataUser: state.auth.dataUser,
  })
}

const mapDispatch = {
  fetchDataUserHome,
  setDataUserHome
};

export default connect(
  mapStateToProps,
  mapDispatch
)(HomeScreen);
