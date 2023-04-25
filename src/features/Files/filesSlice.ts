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
export const fetchFileTC = createAsyncThunk('files/fetchFiles', async (param: {fileId: number}, {dispatch, rejectWithValue}) => {

  try {
    const res = await filesApi.getFile(param.fileId)
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
export const deleteFileTC = createAsyncThunk('files/fetchFiles', async (param: {fileId: number}, {dispatch, rejectWithValue}) => {

  try {
    await filesApi.deleteFile(param.fileId)
    dispatch(deleteFile({fileId: param.fileId}))
  } catch (e) {
    return rejectWithValue(null)
  }

})

export const updateFileTC = createAsyncThunk('files/fetchFiles', async (param: {fileId: number, modelFile: UpdateFileType}, {dispatch, rejectWithValue}) => {

  try {
    const res = await filesApi.updateFile(param.fileId, param.modelFile)
    dispatch(updateFile({fileId: param.fileId, file: res}))
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
    deleteFile(state, action: PayloadAction<{fileId: number}>) {
      const index = state.files.findIndex(fl => fl.id === action.payload.fileId)

      if(index > -1) {
        state.files.splice(index, 1)
      }
    },
    updateFile(state, action: PayloadAction<{fileId: number, file: FileType}>) {
      const index = state.files.findIndex(fl => fl.id === action.payload.fileId)

      if(index > -1) {
        state.files[index] = {...action.payload.file}
      }
    }
  }
})

export const filesReducer = slice.reducer
export const {setFiles, setFile, createFile, deleteFile, updateFile} = slice.actions