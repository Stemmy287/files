import {AnyAction, combineReducers} from "redux";
import {configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk"
import {filesReducer} from "features/Files/filesSlice";
import {appReducer} from "app/appSlice";

const rootReducers = combineReducers({
  files: filesReducer,
  app: appReducer
})

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

//types
export type AppRootStateType = ReturnType<typeof rootReducers>
export type AppDispatchThunkType = ThunkDispatch<AppRootStateType, any, AnyAction>