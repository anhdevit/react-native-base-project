/**
 * @format
 * @flow
 */

import colors from '@config/colors';
import { goBack, navigate } from '@navigation/RootNavigation';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import {
  resetFilter,
  setDirectionApartment,
  setFloorApartment,
  setStatusApartment,
  setTypeApartment,
  setIsCallGetNewDataSearch
} from '../search/searchHomeSlice';
import ElementPrice from './ElementPrice';
import ElementSelect from './ElementSelect';
import ListElement from './ListElement';
import { styles } from './styles';

function FilterScreen(props) {
  const {
    typeApartmentFilter,
    setTypeApartment,
    typeApartment,
    resetFilter,
    setIsCallGetNewDataSearch
  } = props;

  const fetchSearchWithFilter = () => {
    setIsCallGetNewDataSearch(true)
    goBack()
  }

  return (
    <View style={styles.container} >
      <ScrollView>
        {/* <ElementSelect
          title={'Tỉnh thành phố'}
          value={'Hà Nội'}
          onSelect={() => navigate('city')}
        /> */}
        <ListElement
          title={'Chọn cách thứ filter'}
          data={typeApartmentFilter}
          setValue={(item) => setTypeApartment(item)}
          value={typeApartment}
        />
        <View style={styles.viewFooter}>
          <TouchableOpacity
            style={[styles.viewButton, styles.normalButton]}
            onPress={() => resetFilter()}
          >
            <Text style={{ color: colors.colorPrimary }}>Thiết lập lại</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={fetchSearchWithFilter}
          >
            <LinearGradient
              colors={[colors.colorPrimary, '#FDB913']}
              style={styles.linearGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <Text style={styles.textButton}>Hoàn tất</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View >
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps -> state.search", state.search)

  return ({
    typeApartmentFilter: state.search.typeApartmentFilter,
    statusApartmentFilter: state.search.statusApartmentFilter,
    floorApartmentFilter: state.search.floorApartmentFilter,
    directionApartmentFilter: state.search.directionApartmentFilter,
    typeApartment: state.search.typeApartment,
    statusApartment: state.search.statusApartment,
    floorApartment: state.search.floorApartment,
    directionApartment: state.search.directionApartment,
    project: state.search.project,
    city: state.search.city,
  })
}

const mapDispatch = {
  setTypeApartment,
  setStatusApartment,
  setFloorApartment,
  setDirectionApartment,
  resetFilter,
  setIsCallGetNewDataSearch,
}

export default connect(
  mapStateToProps,
  mapDispatch
)(FilterScreen);
