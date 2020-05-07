/**
 * @format
 * @flow
 */

import FlatlistCustom from '@components/FlatlistCustom';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import DepartmentItem from './components/DepartmentItem';
import { homeStyles } from './styles';

function HotProduct(props) {
  const { route } = props
  const { data } = route.params

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
      />
    </SafeAreaView>

  );
};

export default HotProduct;

const styles = homeStyles

