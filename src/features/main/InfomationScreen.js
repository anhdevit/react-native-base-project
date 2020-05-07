/**
 * @format
 * @flow
 */

import FlatlistCustom from '@components/FlatlistCustom';
import { plainToClass } from 'class-transformer';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Apartment } from 'src/data/model/HomeModelNew.ts';
import DepartmentItem from './components/DepartmentItem';
import { fetchEstateSellingProduct } from './homeSlice';
import { homeStyles } from './styles';

function InfomationScreen(props) {
  const [data, setData] = useState([]);

  const onCallbackInitPage = result => {
    setData(mapDataModel(result.data))
  };

  const mapDataModel = data => data.map(item => plainToClass(Apartment, item));

  const callbackLoadMore = result => {
    setData([...data, ...mapDataModel(result.data)])
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <FlatlistCustom
        data={data}
        keyExtractor={(item, index) =>
          item.idPost ? item.idPost.toString() : index.toString()
        }
        renderItem={({ item, index }) => (
          <DepartmentItem
            item={item}
            styleCustom={styles.item}
            styleBg={styles.bg}
          />
        )}
        getListDataApi={fetchEstateSellingProduct}
        onCallbackInitPage={onCallbackInitPage}
        callbackLoadMore={callbackLoadMore}
      />
    </SafeAreaView>

  );
};

export default InfomationScreen;

const styles = homeStyles
