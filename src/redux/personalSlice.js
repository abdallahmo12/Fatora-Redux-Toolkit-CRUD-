import { createSlice } from '@reduxjs/toolkit'

export const personalSlice = createSlice({
  name: 'fatora',
  initialState :{
    Foatier : [] 
  },
  reducers: {
    addFatora : (state ,action) => {
        state.Foatier.push(action.payload);
    },
    deleteFatora : (state , action) =>{
        state.Foatier = state.Foatier.filter((element) => element.id != action.payload)
    },
    updateFatora : (state , action) =>{
        state.Foatier.map(el => {
            if(el.id == action.payload.id)
            {
                el.name = action.payload.name;
                el.phone = action.payload.phone;
                el.address = action.payload.address;
                el.amount = action.payload.amount;
                el.products = action.payload.products;
            }
        })
    }
  },
})

// Action creators are generated for each case reducer function
export const { addFatora , deleteFatora , updateFatora } = personalSlice.actions

export default personalSlice.reducer