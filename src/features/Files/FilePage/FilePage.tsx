import React, {ChangeEvent, useEffect, useState} from 'react';
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
import {Input} from "common/components/Input/Input";

export const FilePage = () => {

  const [isActive, setIsActive] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const file = useAppSelector(fileSelector)

  const {fileId} = useParams()

  const dispatch = useAppDispatch()

  useEffect(() => {
    fileId && dispatch(fetchFileTC({fileId: +fileId}))
  }, [dispatch, fileId])

  useEffect(() => {
    dispatch(fetchFilesTC())
  }, [dispatch])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const getHighlightedText = (text: string, highlight: string) => {
    const parts = text?.split(new RegExp(`(${highlight})`, 'gi'));
    return <p>{parts?.map(part => part?.toLowerCase() === highlight.toLowerCase() ? <span className={s.highLight}>{part}</span> : part)}</p>;
  }

  return (
    <div className={s.container}>
      <BackLink link={PATH.MAIN} where={'files page'}/>
      <Input
        title={'поиск по файлу'}
        component={'input'}
        dataFormik={{name: 'matchValue', value: inputValue, onBlur: () => {}, onChange: onChangeHandler}}
      />
      <div className={s.content}>
        <h1>{file.title}</h1>
        {getHighlightedText(file.text, inputValue)}
      </div>
      <Button title={'Изменить файл'} callback={() => setIsActive(true)}/>
      <PopUp isActive={isActive} onClose={() => setIsActive(false)}>
        <AddOrEditFile title={'Изменить файл'} buttonTitle={'Изменить'} onClose={() => setIsActive(false)} file={file} isEdit/>
      </PopUp>
    </div>
  );
};






