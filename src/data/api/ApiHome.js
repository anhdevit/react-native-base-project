import { instanceApiService } from './index';

// PATH
const sfcc = 'WsMobile-GetDataSFCC'
const product_search = 'WsMobile-Product_search'
const WISHLIST_SHOW = 'WsMobile-Wishlist_show'
const WISHLIST_ADD_PRODUCT = 'WsMobile-Wishlist_add_product'
const WISHLIST_REMOVE_PRODUCT = 'WsMobile-Wishlist_remove_product'
const GET_CONFIG = 'WsMobile-Get_config'

export async function getDataSFCC(acttype, dataid) {
  try {
    var response = await instanceApiService.post(
      sfcc,
      null,
      {
        params: {
          acttype,
          dataid
        }
      }
    )
    return response.data;
  } catch (error) {
    console.log("getDataSFCC -> error", error)
    return error;
  }
}

export async function getProductSearch(params) {
  try {
    var response = await instanceApiService.post(
      product_search,
      null,
      {
        params: params
      }
    )
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function apiGetWishlistShow(params) {
  try {
    var response = await instanceApiService.post(
      WISHLIST_SHOW,
      null,
      {
        params: params
      }
    )
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function apiAddWishlistShow(params) {
  try {
    var response = await instanceApiService.post(
      WISHLIST_ADD_PRODUCT,
      null,
      {
        params: params
      }
    )
    return response.data;
  } catch (error) {
    return error;
  }
}


export async function apiRemoveWishlistShow(params) {
  try {
    var response = await instanceApiService.post(
      WISHLIST_REMOVE_PRODUCT,
      null,
      {
        params: params
      }
    )
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getConfig() {
  var response = await instanceApiService.post(
    GET_CONFIG,
    null,
    {}
  );
  return await response.data;
}
