import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import images from '@res/icons';
import { useNavigation } from '@react-navigation/native';
import colors from '@config/colors';

const HeaderLeft = ({ icon, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => (onPress ? onPress() : navigation.goBack())}
      style={styles.buttonBack}>
      <Image 
      source={icon ? icon : images.ic_back}
      style={{
        tintColor: colors.colorPrimary
      }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBack: {
    marginLeft: 16,
  },
});

export default HeaderLeft;
