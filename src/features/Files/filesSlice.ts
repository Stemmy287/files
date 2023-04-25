import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {filesApi, FileType, UpdateFileType} from "features/Files/filesApi";

export const fetchFilesTC = createAsyncThunk('files/fetchFiles', async (param, {dispatch, rejectWithValue}) => {

  try {
    const res = await filesApi.getFiles()
    dispatch(setFiles({files: res}))
  } catch (e) {
    return rejectWithValue(null)
  }

})
export const fetchFileTC = createAsyncThunk('files/fetchFiles', async (param: {id: number}, {dispatch, rejectWithValue}) => {

  try {
    const res = await filesApi.getFile(param.id)
    dispatch(setFile({file: res}))
  } catch (e) {
    return rejectWithValue(null)
  }

})
export const createFileTC = createAsyncThunk('files/fetchFiles', async (param: {file: FileType}, {dispatch, rejectWithValue}) => {

  try {
    const res = await filesApi.createFile(param.file)
    dispatch(createFile({file: res}))
  } catch (e) {
    return rejectWithValue(null)
  }

})
export const deleteFileTC = createAsyncThunk('files/fetchFiles', async (param: {id: number}, {dispatch, rejectWithValue}) => {

  try {
    await filesApi.deleteFile(param.id)
    dispatch(deleteFile({id: param.id}))
  } catch (e) {
    return rejectWithValue(null)
  }

})

export const updateFileTC = createAsyncThunk('files/fetchFiles', async (param: {id: number, modelFile: UpdateFileType}, {dispatch, rejectWithValue}) => {

  try {
    const res = await filesApi.updateFile(param.id, param.modelFile)
    dispatch(updateFile({id: param.id, file: res}))
  } catch (e) {
    return rejectWithValue(null)
  }

})

const slice = createSlice({
  name: 'files',
  initialState: {
    files: [] as FileType[],
    file: {} as FileType
  },
  reducers: {
    setFiles(state, action: PayloadAction<{files: FileType[]}>) {
      state.files = action.payload.files
    },
    setFile(state, action: PayloadAction<{file: FileType}>){
      state.file = action.payload.file
    },
    createFile(state, action: PayloadAction<{file: FileType}>) {
      state.files.unshift(action.payload.file)
    },
    deleteFile(state, action: PayloadAction<{id: number}>) {
      const index = state.files.findIndex(fl => fl.id === action.payload.id)

      if(index > -1) {
        state.files.splice(index, 1)
      }
    },
    updateFile(state, action: PayloadAction<{id: number, file: FileType}>) {
      const index = state.files.findIndex(fl => fl.id === action.payload.id)

      if(index > -1) {
        state.files[index] = {...action.payload.file}
      }
    }
  }
})

export const filesReducer = slice.reducer
export const {setFiles, setFile, createFile, deleteFile, updateFile} = slice.actions