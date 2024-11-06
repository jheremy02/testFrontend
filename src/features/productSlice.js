import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProductsService } from '../components/services';

export const getProductsThunk = createAsyncThunk('product/productsThunk', async (params) => {
  const response = await getProductsService(params);
  return response

})


const initialState = {
  products: [],
  productSelected: null,
  filteredProducts: [],
  productsSelected: [],
  isLoading: false,
  success: true,
  error: false
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductSelected: (state, action) => {
      state.productsSelected = action.payload;
    },
    addProductSelectedAction: (state, action) => {
      state.productsSelected = [...state.productsSelected, action.payload];
    },

    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload
    }

  },
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.pending, (state, action) => {
      state.isLoading = true
    })

    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = false
      state.success = true
      const data = action.payload
      state.products = data

    })

    builder.addCase(getProductsThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = true
      state.success = false

    })
  }
})

// Action creators are generated for each case reducer function
export const { addProductSelectedAction,setFilteredProducts } = productSlice.actions
export const productSelector = state => state.product
export default productSlice.reducer