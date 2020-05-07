/**
 * @format
 * @flow
 */

import colors from '@config/colors';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { setMaxPrice, setMinPrice } from '../search/searchHomeSlice';
import { connect } from 'react-redux';

const width = Dimensions.get('window').width;

function ElementPrice(props) {
  const { title, minPrice, maxPrice, setMinPrice, setMaxPrice } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <MultiSlider
        containerStyle={{
          alignSelf: 'center'
        }}
        min={0}
        max={20}
        values={[minPrice ? minPrice : 0, maxPrice ? maxPrice : 20]}
        onValuesChange={values => {
          if (values[0] !== minPrice) {
            setMinPrice(values[0]);
          }
          if (values[1] !== maxPrice) {
            setMaxPrice(values[1]);
          }
        }}
        sliderLength={width - 60}
        trackStyle={{
          height: 8,
          borderRadius: 4
        }}
        markerContainerStyle={{
          marginTop: 4
        }}
        selectedStyle={{ backgroundColor: colors.colorPrimary }}
        unselectedStyle={{ backgroundColor: 'silver' }}
        markerStyle={{
          backgroundColor: colors.colorPrimary,
          width: 24,
          height: 24
        }}
      // step={step}
      />
      <View style={styles.viewPrice} >
        <Text style={styles.textPrice}>{minPrice ? `${minPrice} tỷ` : '0 tỷ'}</Text>
        <Text style={styles.textPrice}>{maxPrice ? `${maxPrice} tỷ` : '20 tỷ'}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return ({
    minPrice: state.search.minPrice,
    maxPrice: state.search.maxPrice,
  })
}

const mapDispatch = {
  setMinPrice,
  setMaxPrice,
}

export default connect(
  mapStateToProps,
  mapDispatch
)(ElementPrice);

const styles = StyleSheet.create({
  container: {
    marginTop: 16
  },
  title: {
    color: '#242424',
    fontSize: 17,
    fontWeight: '600'
  },
  city: {
    fontSize: 15,
    color: '#242424',
    flex: 1
  },
  button: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 8,
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewPrice: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 8
  },
  textPrice: {
    color: 'gray'
  },
});
