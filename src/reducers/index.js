import { authReducer } from '@features/auth/authReducer';
import { combineReducers } from 'redux';
import LoadingReducer from '../features/loading/modules/reducer';
import SearchHomeSlice from '../features/search/searchHomeSlice';

export default combineReducers({
  auth: authReducer,
  loading: LoadingReducer,
  search: SearchHomeSlice,
});
