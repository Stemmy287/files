import React, {useEffect, useState} from 'react';
import s from './filePage.module.scss'
import {useParams} from "react-router-dom";
import {useAppDispatch} from "hooks/useAppDispatch";
import {fetchFilesTC, fetchFileTC} from "features/Files/filesSlice";
import {useAppSelector} from "hooks/useAppSelector";
import {fileSelector} from "features/Files/filesSelectors";
import {Button} from "common/components/Button/Button";
import {PopUp} from "common/components/PopUp/PopUp";
import {AddOrEditFile} from "common/components/AddOrEditFile/AddOrEditFile";
import {BackLink} from "common/components/BackLink/BackLink";
import {PATH} from "common/constants/path";

export const FilePage = () => {

  const [isActive, setIsActive] = useState(false)

  const file = useAppSelector(fileSelector)

  const {fileId} = useParams()

  const dispatch = useAppDispatch()

  useEffect(() => {
    fileId && dispatch(fetchFileTC({fileId: +fileId}))
  }, [dispatch, fileId])

  useEffect(() => {
    dispatch(fetchFilesTC())
  }, [dispatch])

  return (
    <div className={s.container}>
      <BackLink link={PATH.MAIN} where={'files page'}/>
      <div className={s.content}>
        <h1>{file.title}</h1>
        <p>{file.text}</p>
      </div>
      <Button title={'Изменить файл'} callback={() => setIsActive(true)}/>
      <PopUp isActive={isActive} onClose={() => setIsActive(false)}>
        <AddOrEditFile title={'Изменить файл'} buttonTitle={'Изменить'} onClose={() => setIsActive(false)} file={file} isEdit/>
      </PopUp>
    </div>
  );
};

