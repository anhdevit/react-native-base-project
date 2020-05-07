import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import images from '@res/icons';
import { PropTypes } from 'prop-types';
import { Colors, Typography } from '@config/index';

export default function ButtonAccout(props) {
  const { icon, title, onPress, styleCommon } = props;
  return (
    <TouchableOpacity
      style={[styles.btnAccount, styleCommon]}
      onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        {icon && (
          <Image source={icon} style={{ marginTop: 5, marginRight: 10 }} />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <Image source={images.ic_goto} style={{ right: 10 }} />
    </TouchableOpacity>
  );
}

ButtonAccout.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  btnAccount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 50,
    alignItems: 'center',
    borderBottomColor: Colors.border,
    borderBottomWidth: 0.5,
    backgroundColor: Colors.background,
  },
  title: {
    padding: 5,
    fontSize: Typography.FONT_SIZE.BASE,
    flex: 1,
    fontFamily: Typography.FONT_FAMILY.REGULAR,
    lineHeight: 22,
    color: Colors.ColorBody,
  },
});
