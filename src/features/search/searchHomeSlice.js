import { createSlice } from '@reduxjs/toolkit';
import { plainToClass } from 'class-transformer';
import { getConfig, getProductSearch } from 'src/data/api/ApiHome';
import { Apartment } from 'src/data/model/HomeModelNew.ts';
import { showLoading, stopLoad } from '@features/loading/modules/actions';
import { store } from '@reducers/store';

const searchSlice = createSlice({
  name: 'searchHome',
  initialState: {
    textSearch: '',
    dataSearch: [],
    isForcusTextSearch: false,
    // projectsFilter: dataProject,
    typeApartment: null,
    statusApartment: null,
    floorApartment: null,
    directionApartment: null,
    typeApartmentFilter: [
      {
        value: 'fullName',
        display: 'Full Name'
      },
      {
        value: 'email',
        display: 'Email'
      },
      {
        value: 'userName',
        display: 'User name'
      }
    ],
    statusApartmentFilter: null,
    floorApartmentFilter: null,
    directionApartmentFilter: null,
    minPrice: null,
    maxPrice: null,
    project: null,
    city: null,
    filters: {},
    isCallGetNewDataSearch: false
  },
  reducers: {
    searchHome(state, action) {
      state.textSearch = action.payload;
    },
    setDataSearch(state, action) {
      state.dataSearch = [...action.payload]
    },
    setIsForcusTextSearch(state, action) {
      state.isForcusTextSearch = action.payload
    },
    setTypeApartment(state, action) {
      state.typeApartment = action.payload
    },
    setStatusApartment(state, action) {
      state.statusApartment = action.payload
    },
    setFloorApartment(state, action) {
      state.floorApartment = action.payload
    },
    setDirectionApartment(state, action) {
      state.directionApartment = action.payload
    },
    setMinPrice(state, action) {
      state.minPrice = action.payload
    },
    setMaxPrice(state, action) {
      state.maxPrice = action.payload
    },
    setProject(state, action) {
      state.project = action.payload
    },
    setCity(state, action) {
      state.city = action.payload
    },
    resetFilter(state, action) {
      state.typeApartment = null
      state.statusApartment = null
      state.floorApartment = null
      state.directionApartment = null
      state.minPrice = null
      state.maxPrice = null
      state.project = null
      state.city = null
    },
    setDataConfig(state, action) {
      state.typeApartmentFilter = action.payload.houseStyle;
      state.statusApartmentFilter = action.payload.totalOrder;
      state.floorApartmentFilter = action.payload.floorNo;
      state.directionApartmentFilter = action.payload.propertyDirection;
    },
    setFilters(state, action) {
      state.filters = action.payload
    },
    setIsCallGetNewDataSearch(state, action) {
      state.isCallGetNewDataSearch = action.payload
    },
  },
})

export const {
  searchHome,
  setDataSearch,
  setIsForcusTextSearch,
  setTypeApartment,
  setStatusApartment,
  setFloorApartment,
  setDirectionApartment,
  setMinPrice,
  setMaxPrice,
  resetFilter,
  setProject,
  setCity,
  setDataConfig,
  setFilters,
  setIsCallGetNewDataSearch
} = searchSlice.actions

export default searchSlice.reducer

export const apiSearchProduct = (start, sz) => async (dispatch, getState)=> {
  try {

    const {
      textSearch,
      typeApartment,
      statusApartment,
      floorApartment,
      directionApartment,
      minPrice,
      maxPrice,
      project
    } = getState().search;

    const filters = {}
    let indexFilter = 1
    if (project) {
      filters[`prefn${indexFilter + 1}`] = 'projectName'
      filters[`prefv${indexFilter + 1}`] = project.name
    }

    if (typeApartment) {
      filters[`prefn${indexFilter + 1}`] = 'houseStyle'
      filters[`prefv${indexFilter + 1}`] = typeApartment
    }

    if (statusApartment) {
      filters[`prefn${indexFilter + 1}`] = 'totalOrder'
      filters[`prefv${indexFilter + 1}`] = statusApartment
    }

    if (floorApartment) {
      filters[`prefn${indexFilter + 1}`] = 'floorNo'
      filters[`prefv${indexFilter + 1}`] = floorApartment
    }

    if (directionApartment) {
      filters[`prefn${indexFilter + 1}`] = 'propertyDirection'
      filters[`prefv${indexFilter + 1}`] = directionApartment
    }

    if (minPrice) {
      filters['pmin'] = minPrice * 1000
    }

    if (maxPrice) {
      filters['pmax'] = maxPrice * 1000
    }

    const params = {
      cgid: 'project',
      launched: 1,
      sz: sz,
      start: start,
      prefv1: false,
      prefn1: 'isSold',
      q: textSearch,
      ...filters
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
  } catch (err) {
    console.log("err", err)
  }
}

export const fetchDataConfig = () => async dispatch => {
  try {
    const response = await getConfig()
    if (response.success) {
      if (response.data) {
        const search_mobile = JSON.parse(response.data.search_mobile)
        console.log("search_mobile", search_mobile)
        dispatch(setDataConfig(search_mobile))
      }
    }
  } catch (e) {
    console.log("getData -> e", e)
  }
}



