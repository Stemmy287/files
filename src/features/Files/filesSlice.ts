import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FileType, UpdateFileType} from "features/Files/filesApi";

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
    updateFile(state, action: PayloadAction<{id: number, modelFile: UpdateFileType}>) {
      const index = state.files.findIndex(fl => fl.id === action.payload.id)

      if(index > -1) {
        state.files[index] = {...state.files[index], ...action.payload.modelFile}
      }
    }
  }
})

export const filesReducer = slice.reducer
export const {setFiles, setFile, createFile, deleteFile, updateFile} = slice.actions