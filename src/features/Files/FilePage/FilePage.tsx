import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch} from "hooks/useAppDispatch";
import {fetchFileTC} from "features/Files/filesSlice";
import {useAppSelector} from "hooks/useAppSelector";
import {fileSelector} from "features/Files/filesSelectors";

export const FilePage = () => {

  const file = useAppSelector(fileSelector)

  const {fileId} = useParams()

  const dispatch = useAppDispatch()

  useEffect(() => {
    fileId && dispatch(fetchFileTC({fileId: +fileId}))
  }, [dispatch, fileId])

  return (
    <div>
      <h1>{file.title}</h1>
      <p>{file.text}</p>
    </div>
  );
};

