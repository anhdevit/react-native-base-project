import { navigate } from '@navigation/RootNavigation';
import images from '@res/icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonIcon from './ButtonIcon';

const HeaderChat = ({}) => {
  return (
    <View style={styles.headerRight}>
      <ButtonIcon
        onPress={() => {}}
        style={styles.buttonSearch}
        styleImage={{ width: 32 }}
        icon={images.ic_chat_color}
      />
    </View>
  );
};

export default HeaderChat;

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
  },
  buttonSearch: {
    marginRight: 16,
  },
});
