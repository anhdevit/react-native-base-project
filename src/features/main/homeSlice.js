import { createSlice } from '@reduxjs/toolkit';
import { plainToClass } from 'class-transformer';
import { Apartment } from 'src/data/model/HomeModelNew.ts';
import { getProductSearch, apiGetWishlistShow, apiAddWishlistShow, apiRemoveWishlistShow, getDataSFCC, getConfig } from 'src/data/api/ApiHome';

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState: {
    dataHotProduct: [],
    categorys: [],
    dataFavorite: [],
    objectDataFavorite: {},
  },
  reducers: {
    setHotProduct(state, action) {
      state.dataHotProduct = action.payload.dataHotProduct
      state.objectDataFavorite = action.payload.objectDataFavorite
    },
    setCategory(state, action) {
      state.categorys = action.payload
    },
    setFavorite(state, action) {
      state.dataFavorite = action.payload.dataFavorite;
      state.objectDataFavorite = action.payload.objectDataFavorite
    },
    setObjectFavorite(state, action) {
      state.objectDataFavorite = action.payload.objectDataFavorite
    },
    addFavorite(state, action) {
      state.objectDataFavorite[action.payload] = true
    },
    removeFavorite(state, action) {
      state.objectDataFavorite[action.payload] = false
    },
  }
})

export const {
  setHotProduct,
  setCategory,
  setFavorite,
  addFavorite,
  removeFavorite,
} = homeSlice.actions

export default homeSlice.reducer;

export const getCategory = async () => {
  try {
    const json = await getDataSFCC('categories', 'project')
    if (json) {
      if (json.data) {
        if (json.data.categories) {
          return json.data.categories
        }
      }
    }
    return []
  } catch (e) {
    console.log("getTopBanner -> e", e)
  }
}

export const getHotProduct = async () => {
  try {
    const json = await getDataSFCC('hotproduct', 'home-hot-product-mobile')
    if (json) {
      if (json.data) {
        return json.data
      }
    }
    return []
  } catch (e) {
    console.log("getTopBanner -> e", e)
  }
}

export const getProductDetail = async (id) => {
  try {
    const json = await getDataSFCC('products', id)
    if (json) {
      if (json.data) {
        return json.data
      }
    }
    return {}
  } catch (e) {
    console.log("getTopBanner -> e", e)
  }
}

export const fetchHotProduct = () => async dispatch => {
  try {
    const dataResponse = await getHotProduct()
    const objectDataFavorite = {}
    const dataHotProduct = dataResponse.map(item => {
      console.log(" fetchHotProduct item", item)
      objectDataFavorite[item.id] = item.wishlist
      return plainToClass(Apartment, item)
    })
    console.log("objectDataFavorite", objectDataFavorite)
    dispatch(setHotProduct({
      dataHotProduct,
      objectDataFavorite
    }))
  } catch (err) {
    console.log("err", err)
  }
}

/**
 * @param launched = o là bất động sản sắp bán
 */
export const fetchEstateSellProduct = async (start, sz) => {
  try {
    const params = {
      cgid: 'project',
      launched: 0,
      sz: sz,
      start: start,
      prefv1: false,
      prefn1: 'isSold'
    }
    const response = await getProductSearch(params)
    if (response.success) {
      if (response.data) {
        response.dataResponse = response.data;
      } else {
        response.dataResponse = []
      }
    }
    return response
  } catch (e) {
    console.log("getData -> e", e)
  }
}


/**
 * @param launched = 1 là bất động sản đang bán
 */
export const fetchEstateSellingProduct = async (start, sz) => {
  try {
    const params = {
      cgid: 'project',
      launched: 1,
      sz: sz,
      start: start,
      prefv1: false,
      prefn1: 'isSold'
    }
    const response = await getProductSearch(params)
    console.log("fetchEstateSellingProduct -> response", response)
    if (response.success) {
      if (response.data) {
        response.dataResponse = response.data;
      } else {
        response.dataResponse = []
      }
    }
    return response
  } catch (e) {
    console.log("getData -> e", e)
  }
}

export const fetchCategory = () => async dispatch => {
  try {
    const data = await getCategory()
    dispatch(setCategory(data))
  } catch (e) {
    console.log("getData -> e", e)
  }
}

export const fetchDataWishlistShow = () => async dispatch => {
  try {
    const response = await apiGetWishlistShow()
    console.log("fetchDataWishlistShow", response)
    if (response.success) {
      const items = response.data.items
      const objectDataFavorite = {}

      const mapItems = items.map(item => {
        objectDataFavorite[item.is] = true
        return plainToClass(Apartment, item)
      })
      // console.log("mapItems", mapItems)
      dispatch(setFavorite({
        dataFavorite: mapItems,
        objectDataFavorite
      }))
      return
    }
  } catch (e) {
    console.log("getData -> e", e)
  }
}

export const addWishlistShow = (pid) => async dispatch => {
  try {
    const response = await apiAddWishlistShow({ pid })
    if (response.success) {
      dispatch(addFavorite(pid))
      return
    }
  } catch (e) {
    console.log("getData -> e", e)
  }
}

export const removeWishlistShow = (pid) => async dispatch => {
  try {
    const response = await apiRemoveWishlistShow({ pid })
    if (response.success) {
      dispatch(removeFavorite(pid))
      return
    }
  } catch (e) {
    console.log("getData -> e", e)
  }
}

export const getTopBanner = async () => {
  try {
    const json = await getDataSFCC('contentaccess', 'home-banner-mobile')
    if (json.data) {
      const dataJson = `{"data": ${json.data}}`
      const parseJson = JSON.parse(dataJson)
      return parseJson['data']
    }
    return []
  } catch (e) {
    console.log("getTopBanner -> e", e)
  }
}
