import {useDispatch} from "react-redux";
import {AppDispatchThunkType} from "app/store";


export const useAppDispatch = () => useDispatch<AppDispatchThunkType>()