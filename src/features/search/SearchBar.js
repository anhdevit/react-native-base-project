import ButtonIcon from '@components/ButtonIcon';
import { navigate } from '@navigation/RootNavigation';
import images from '@res/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { searchHome, setIsForcusTextSearch, setIsCallGetNewDataSearch } from './searchHomeSlice';
import { stylesSearchBar } from './style';

const SearchBar = (props) => {
  const {
    searchHome,
    textSearch,
    setIsForcusTextSearch,
    isForcusTextSearch,
    setIsCallGetNewDataSearch
  } = props

  const onSubmitEditing = () => {
    setIsCallGetNewDataSearch(true)
  }

  return (
    <View style={[styles.search, { borderWidth: isForcusTextSearch ? 1 : 0 }]}>
      <Image
        style={styles.buttonSearchInput}
        source={images.ic_search}
      />
      <TextInput
        style={styles.inputSearch}
        placeholder='Tìm kiếm sản phẩm, BĐS'
        placeholderTextColor='#9D9D9D'
        value={textSearch}
        onChangeText={(text) => searchHome(text)}
        onFocus={() => setIsForcusTextSearch(true)}
        onBlur={() => setIsForcusTextSearch(false)}
        returnKeyType={'search'}
        onSubmitEditing={onSubmitEditing}
        autoCapitalize={'none'}
        autoCorrect={false}
        spellCheck={false}
        placeholderTextColor={'gray'}
      />
      {
        textSearch ?  <ButtonIcon
          onPress={() => searchHome('')}
          style={styles.buttonFilter}
          icon={images.ic_close2}
        /> : <ButtonIcon
            onPress={() => navigate('filter')}
            style={styles.buttonFilter}
            icon={images.ic_filter}
            styleImage={styles.iconFilter}
          />
      }
    </View>
  )
};

const mapStateToProps = (state, ownProps) => {
  return ({
    textSearch: state.search.textSearch,
    isForcusTextSearch: state.search.isForcusTextSearch,
    typeApartment: state.search.typeApartment,
    statusApartment: state.search.statusApartment,
    floorApartment: state.search.floorApartment,
    directionApartment: state.search.directionApartment,
    minPrice: state.search.minPrice,
    maxPrice: state.search.maxPrice,
    project: state.search.project,
  })
}

const mapDispatch = {
  searchHome,
  setIsForcusTextSearch,
  setIsCallGetNewDataSearch,
}

export default connect(
  mapStateToProps,
  mapDispatch
)(SearchBar)

const styles = stylesSearchBar
