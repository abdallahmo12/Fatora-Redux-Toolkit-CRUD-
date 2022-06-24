import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({
  name: 'items',
  initialState :{
    items : []
  },
  reducers: {
    addItem : (state ,action) => {
        state.items.push(action.payload);
    },
    clearItems : (state) =>{
        state.items = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem  , clearItems , sumItems , sumClear} = itemSlice.actions

export default itemSlice.reducer