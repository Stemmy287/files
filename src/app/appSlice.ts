import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'app',
  initialState: {
    isLoading: false
  },
  reducers: {
    setIsLoading(state, action: PayloadAction<{isLoading: boolean}>) {
      state.isLoading = action.payload.isLoading
    }
  }
})

export const appReducer = slice.reducer
export const {setIsLoading} = slice.actions