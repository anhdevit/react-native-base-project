/**
 * @format
 * @flow
 */

import colors from '@config/colors';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const stylesSearch = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textHistorySearch: {
    fontSize: 15,
    color: colors.colorPrimary
  },
  deleteHistory: {
    fontSize: 13,
    color: '#162B75'
  },
  headerView: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item: {
    padding: 16,
    borderBottomWidth: 0.5,
    borderColor: '#E5E5E5'
  },
  footerView: {
    padding: 16,
  },
  loadmore: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#E5E5E5',
    paddingBottom: 16,
    marginBottom: 16
  },
  textLoadmore: {
    marginLeft: 16,
    color: '#162B75'
  },
  suggest: {
    fontSize: 13,
    color: '#7B7B7B'
  },
  project: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemProject: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderColor: '#CCCCCC',
    borderWidth: 0.5,
    margin: 8,
    borderRadius: 8,
    flex: 1
  },
  itemDepartment: {
    width: '95%',
    alignSelf: 'center'
  },
  bg: {
    width: '100%',
  }
});


export const stylesSearchBar = StyleSheet.create({
  search: {
    width: wp('80%'),
    flex: 1,
    backgroundColor: '#F2F2F2',
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    borderRadius: 8,
    borderColor: colors.colorPrimary,
    marginVertical: 4,
  },
  inputSearch: {
    flex: 1,
    marginHorizontal: 8,
    color: 'black',
  },
  buttonCancel: {
    flex: 1,
    width: wp('15%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCanncer: {
    color: '#162B75',
    fontSize: 15,
    lineHeight: 15
  },
  buttonSearchInput: {
    marginLeft: 16,
    tintColor: '#7B7B7B',
    width: 16,
    aspectRatio: 1
  },
  iconFilter: {
    tintColor: '#7B7B7B',
  },
  buttonFilter: {
    marginRight: 16,
  },
  border: {
    borderWidth: 1,
    borderColor: colors.colorPrimary
  }
});
