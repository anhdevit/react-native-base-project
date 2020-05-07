/**
 * @format
 * @flow
 */

import FlatlistCustom from '@components/FlatlistCustom';
import React, { useState } from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { Apartment } from 'src/data/model/HomeModelNew.ts';
import DepartmentItem from './components/DepartmentItem';
import { fetchEstateSellProduct } from './homeSlice';
import { homeStyles } from './styles';
import { plainToClass } from 'class-transformer';

function EstateSell(props) {
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
        getListDataApi={fetchEstateSellProduct}
        onCallbackInitPage={onCallbackInitPage}
        callbackLoadMore={callbackLoadMore}
      />
    </SafeAreaView>

  );
};

const styles = homeStyles

export default EstateSell;
