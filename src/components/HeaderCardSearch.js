import { navigate } from '@navigation/RootNavigation';
import images from '@res/icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonIcon from './ButtonIcon';
import { isTablet } from 'react-native-device-info';

const HeaderCardSearch = (props) => {
  const { navigation } = props;

  const actionCart = () => {
    if (isTablet()) {
      return navigation.openDrawer()
    }
  
    navigate('place-order')
  }
  return (
    <View style={styles.headerRight}>
      <ButtonIcon
        onPress={actionCart}
        style={styles.buttonCart}
        icon={images.ic_cart}
      />
      <ButtonIcon
        onPress={() => navigate('search')}
        style={styles.buttonSearch}
        icon={images.ic_search}
      />
    </View>
  )
};

export default HeaderCardSearch

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
  },
  buttonCart: {
    marginRight: 16,
  },
  buttonSearch: {
    marginRight: 16,
  },
});
