import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    theme: 'dark'
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
export const themeUiSelector=state=>state.ui.theme
export default uiSlice.reducer