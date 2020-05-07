/**
 * @format
 * @flow
 */

import FlatlistCustom from '@components/FlatlistCustom';
import images from '@res/icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import BannerItem from './components/BannerItem';
import { homeStyles } from './styles';

const exampleData = [
  {
    image: images.Banner,
  },
  {
    image: images.Banner,
  },
  {
    image: images.Banner,
  },
  {
    image: images.Banner,
  }
]

function BannerScreen() {
  const onPressFeatureItem = item => {
    NavigationService.navigate('DetailUnit', { data: item });
  };

  const onCallbackInitPage = result => {
    this.setState({
      data: this.mapDataModel(result.data)
    });
  };

  const onCallbackRefresh = result => {
    this.setState({
      data: this.mapDataModel(result.data)
    });
  };

  const getListDataApi = async (page, pageSize) => {
    // const response = await getFavoriteApi(page, pageSize);
    // if (response.status === 200) {
    //   response.dataResponse = response.data.data.content;
    // }
    // return response;
  };

  const callbackLoadMore = result => {
    const { data } = this.state;
    this.setState({
      data: [...data, ...this.mapDataModel(result.data)]
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatlistCustom
        data={exampleData}
        keyExtractor={(item, index) =>
          item.idPost ? item.idPost.toString() : index.toString()
        }
        renderItem={({ item, index }) => (
          <BannerItem
            url={item.image}
            styleCustom={styles.item}
            styleBg={styles.bg}
          />
        )}
        // forceRefresh={this.state.forceRefresh}
        getListDataApi={getListDataApi}
        onCallbackInitPage={onCallbackInitPage}
        onCallbackRefresh={onCallbackRefresh}
        callbackLoadMore={callbackLoadMore}
      />
    </SafeAreaView>
  );
};

const styles = homeStyles

export default BannerScreen;
