import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {filesApi, FileType} from "features/Files/filesApi";
import {setIsLoading} from "app/appSlice";
import {AxiosError} from "axios";
import {errorHandler} from "common/utils/errorHandler";

export const fetchFilesTC = createAsyncThunk('files/fetchFiles', async (param, {dispatch}) => {

  dispatch(setIsLoading({isLoading: true}))

  try {
    const res = await filesApi.getFiles()
    dispatch(setFiles({files: res}))
  } catch (e) {
    errorHandler(e as Error | AxiosError<{ error: string }>, dispatch)
  } finally {
    dispatch(setIsLoading({isLoading: false}))
  }

})
export const fetchFileTC = createAsyncThunk('files/fetchFiles', async (param: {fileId: number}, {dispatch}) => {

  dispatch(setIsLoading({isLoading: true}))

  try {
    const res = await filesApi.getFile(param.fileId)
    dispatch(setFile({file: res}))
  } catch (e) {
    errorHandler(e as Error | AxiosError<{ error: string }>, dispatch)
  } finally {
    dispatch(setIsLoading({isLoading: false}))
  }

})
export const createFileTC = createAsyncThunk('files/fetchFiles', async (param: {file: FileType}, {dispatch}) => {

  dispatch(setIsLoading({isLoading: true}))

  try {
    const res = await filesApi.createFile(param.file)
    dispatch(createFile({file: res}))
  } catch (e) {
    errorHandler(e as Error | AxiosError<{ error: string }>, dispatch)
  } finally {
    dispatch(setIsLoading({isLoading: false}))
  }

})
export const deleteFileTC = createAsyncThunk('files/fetchFiles', async (param: {fileId: number}, {dispatch}) => {

  dispatch(setIsLoading({isLoading: true}))

  try {
    await filesApi.deleteFile(param.fileId)
    dispatch(deleteFile({fileId: param.fileId}))
  } catch (e) {
    errorHandler(e as Error | AxiosError<{ error: string }>, dispatch)
  } finally {
    dispatch(setIsLoading({isLoading: false}))
  }

})

export const updateFileTC = createAsyncThunk('files/fetchFiles', async (param: FileType, {dispatch}) => {

  dispatch(setIsLoading({isLoading: true}))

  try {
    const res = await filesApi.updateFile(param)
    dispatch(updateFile({file: res}))
  } catch (e) {
    errorHandler(e as Error | AxiosError<{ error: string }>, dispatch)
  } finally {
    dispatch(setIsLoading({isLoading: false}))
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
      state.files = action.payload.files.reverse()
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
    updateFile(state, action: PayloadAction<{file: FileType}>) {
      state.file = action.payload.file
    }
  }
})

export const filesReducer = slice.reducer
export const {setFiles, setFile, createFile, deleteFile, updateFile} = slice.actions