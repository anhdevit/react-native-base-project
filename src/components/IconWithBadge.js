import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { PropTypes } from 'prop-types';
import { Colors } from '@config/index';

export default function IconWithBadge(props) {
  const { icon, badgeCount, focused } = props;
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.ig(focused)} />
      {badgeCount > 0 && (
        <View style={styles.notifi}>
          <Text style={styles.badge_count}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
}

IconWithBadge.propTypes = {
  icon: PropTypes.number,
  badgeCount: PropTypes.number,
  focused: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    margin: 5,
  },
  notifi: {
    position: 'absolute',
    right: -4,
    top: -3,
    backgroundColor: Colors.red,
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge_count: {
    color: Colors.background,
    fontSize: 10,
    fontWeight: 'bold',
  },
  ig: focused => ({
    tintColor: focused ? Colors.colorPrimary : null,
  }),
});
