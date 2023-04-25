import React, {useEffect, useState} from 'react';
import s from 'features/Files/files.module.scss'
import {useAppDispatch} from "hooks/useAppDispatch";
import {fetchFilesTC} from "features/Files/filesSlice";
import {useAppSelector} from "hooks/useAppSelector";
import {filesSelector} from "features/Files/filesSelectors";
import {File} from "features/Files/File/File";
import {Button} from "common/components/Button/Button";
import {PopUp} from "common/components/PopUp/PopUp";
import {AddFile} from "common/components/AddFile/AddFile";

export const Files = () => {

  const files = useAppSelector(filesSelector)

  const [isActive, setIsActive] = useState(false)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFilesTC())
  }, [dispatch])

  return (
    <div className={s.filesContainer}>
      <Button title={'Добавить файл'} callback={() => {setIsActive(true)}}/>
      <div className={s.filesList}>
        {files.map(fl => <File key={fl.id} file={fl}/> )}
      </div>
      <PopUp isActive={isActive} onClose={() => setIsActive(false)}>
        <AddFile onClose={() => setIsActive(false)}/>
      </PopUp>
    </div>
  );
};

