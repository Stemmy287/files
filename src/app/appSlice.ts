import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'app',
  initialState: {
    isLoading: false,
    error: null as string | null
  },
  reducers: {
    setIsLoading(state, action: PayloadAction<{isLoading: boolean}>) {
      state.isLoading = action.payload.isLoading
    },
    setError(state, action: PayloadAction<{error: string | null}>) {
      state.error = action.payload.error
    }
  }
})

export const appReducer = slice.reducer
export const {setIsLoading, setError} = slice.actions