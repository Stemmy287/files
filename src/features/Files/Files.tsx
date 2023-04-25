import React, {useEffect} from 'react';
import s from 'features/Files/files.module.scss'
import {useAppDispatch} from "hooks/useAppDispatch";
import {fetchFilesTC} from "features/Files/filesSlice";
import {useAppSelector} from "hooks/useAppSelector";
import {filesSelector} from "features/Files/filesSelectors";
import {File} from "features/Files/File/File";

export const Files = () => {

  const files = useAppSelector(filesSelector)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFilesTC())
  }, [dispatch])

  return (
    <div className={s.filesContainer}>
      {files.map(fl => <File key={fl.id} file={fl}/>)}
    </div>
  );
};

