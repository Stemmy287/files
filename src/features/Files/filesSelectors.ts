import {AppRootStateType} from "app/store";

export const filesSelector = (state: AppRootStateType) => state.files.files
export const fileSelector = (state: AppRootStateType) => state.files.file