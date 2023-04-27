import React, {useEffect, useState} from 'react';
import s from 'features/Files/files.module.scss'
import {useAppDispatch} from "hooks/useAppDispatch";
import {fetchFilesTC} from "features/Files/filesSlice";
import {useAppSelector} from "hooks/useAppSelector";
import {filesSelector} from "features/Files/filesSelectors";
import {File} from "features/Files/File/File";
import {Button} from "common/components/Button/Button";
import {PopUp} from "common/components/PopUp/PopUp";
import {AddOrEditFile} from "common/components/AddOrEditFile/AddOrEditFile";

export const Files = () => {

  const [isActive, setIsActive] = useState(false)

  const files = useAppSelector(filesSelector)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFilesTC())
  }, [dispatch])

  return (
    <div className={s.container}>
      <Button title={'Добавить файл'} callback={() => {
        setIsActive(true)
      }}/>
      <div className={s.filesList}>
        {files.map(fl => <File key={fl.id} file={fl}/>)}
      </div>
      {isActive &&
        <PopUp onClose={() => setIsActive(false)}>
          <AddOrEditFile title={'Добавить файл'} buttonTitle={'Добавить'} onClose={() => setIsActive(false)}/>
        </PopUp>}
    </div>
  );
};

