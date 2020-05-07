import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import Spinner from 'react-native-spinkit';
import colors from '@config/colors';
import { FONT_FAMILY } from '@config/typography';
import * as actions from '@features/loading/modules/actions';
import { connect } from 'react-redux';
let { width, height } = Dimensions.get('window');

const ModalLoading = props => {
console.log("props", props)
  const hideModal = () => {
    props.stopLoad();
  };

  // if (!this.props.netStatus) return null;
  return (
    <View>
      <Modal
        visible={props.loading}
        hideModalContentWhileAnimating
        useNativeDriver={true}
        style={styles.container}>
        <View style={styles.content}>
          <Spinner
            style={{ marginBottom: 20, marginRight: 6 }}
            isVisible={true}
            size={42}
            type={'FadingCircleAlt'}
            color={colors.colorPrimary}
          />

          <Text style={styles.textStyle}>{props.loadingText}</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.65)',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 12,
    width: 140,
    height: 110,
  },
  textStyle: {
    color: colors.bodyText,
    fontSize: 15,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});

const mapStateToProps = state => ({
  loading: state.loading.isLoading,
  loadingText: state.loading.loadingText,
  // netStatus: state.root.netStatus,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalLoading);
