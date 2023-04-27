import axios, {AxiosError} from "axios";
import {Dispatch} from "@reduxjs/toolkit";
import {setError} from "app/appSlice";

/**
 * server error handler
 * @param e - object 'AxiosError' type or native 'Error' type
 * @param dispatch - method dispatch from 'redux' store
 */

export const errorHandler = (e: Error | AxiosError<{error: string}>, dispatch: Dispatch) => {
  const err = e as Error | AxiosError<{ error: string }>
  if (axios.isAxiosError(err)) {
    const error = err.response?.data.error ? err.response.data.error : err.message
    dispatch(setError({error}))
  } else {
    dispatch(setError({error: `native error ${err.message}` }))
  }
}