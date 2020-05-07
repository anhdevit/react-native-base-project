import React from 'react';
import { Modal, ActivityIndicator, View, StyleSheet } from 'react-native';
import colors from '@config/colors';

const Loading = ({
  isLoading,
  large = true,
  color = colors.colorPrimary,
  insideInItem = false,
}) => {
  if (isLoading) {
    if (!insideInItem) {
      return (
        <Modal
          visible={isLoading}
          transparent
          onRequestClose={() => { }}
        >
          <View style={[styles.loading, { backgroundColor: '#00000080' }]} >
            <ActivityIndicator size={large ? 'large' : 'small'} color={color} />
          </View>
        </Modal>
      );
    }
    return (
      <View style={styles.loading}  >
        <ActivityIndicator size={large ? 'large' : 'small'} color={color} />
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFill
  },
})

export default Loading;
