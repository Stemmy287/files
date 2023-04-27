import {AppRootStateType} from "app/store";

export const isLoadingSelector = (state: AppRootStateType) => state.app.isLoading
export const errorSelector = (state: AppRootStateType) => state.app.error