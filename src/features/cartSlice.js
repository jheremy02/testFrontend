import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemsSelected:[]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemAction:(state,action)=>{
        state.itemsSelected=[...state.itemsSelected,action.payload]
    }
  },
})


export const productSelector=state=>state.product

// Action creators are generated for each case reducer function
export const { addItemAction } = cartSlice.actions

export default cartSlice.reducer