import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRolesService } from '../../components/roles/services'

const initialState = {
    theme: 'light'
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        
        setTheme: (state, action) => {
            state.theme = action.payload
        }

    },

})

// Action creators are generated for each case reducer function
export const { setTheme} = uiSlice.actions

export default uiSlice.reducer