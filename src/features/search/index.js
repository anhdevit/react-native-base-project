/**
 * @format
 * @flow
 */

import FlatlistCustom from '@components/FlatlistCustom';
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { fetchDataUserHomeSearch, setDataSearch } from '../auth/authSlice';
import { setIsCallGetNewDataSearch } from './searchHomeSlice';
import { stylesSearch } from './style';
import UserItem from '@features/main/HomeScreen/UserItem';


const styles = stylesSearch

function SearchScreen(props) {
  const {
    isCallGetNewDataSearch,
    dataSearch,
    setDataSearch,
    fetchDataUserHomeSearch,
    setIsCallGetNewDataSearch,
    dataUser
  } = props;

  // Ref
  const flatlistCustom = useRef(null)

  useEffect(() => {
    if (isCallGetNewDataSearch) {
      flatlistCustom.current.onInitPage()
      setIsCallGetNewDataSearch(false)
    }
  }, [isCallGetNewDataSearch])

  const onCallbackInitPage = result => {
    setDataSearch(result)
  };

  const callbackLoadMore = result => {
    setDataSearch([...dataSearch, ...result])
  };

  return (
    <FlatlistCustom
      ref={flatlistCustom}
      data={dataSearch}
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
      getListDataApi={fetchDataUserHomeSearch}
      onCallbackInitPage={onCallbackInitPage}
      callbackLoadMore={callbackLoadMore}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return ({
    textSearch: state.search.textSearch,
    dataSearch: state.auth.dataSearch,
    isForcusTextSearch: state.search.isForcusTextSearch,
    filters: state.search.filters,
    isCallGetNewDataSearch: state.search.isCallGetNewDataSearch,
    dataUser: state.auth.dataUser,
  })
}

const mapDispatch = {
  setDataSearch,
  fetchDataUserHomeSearch,
  setIsCallGetNewDataSearch,
};

export default connect(mapStateToProps, mapDispatch)(SearchScreen);
