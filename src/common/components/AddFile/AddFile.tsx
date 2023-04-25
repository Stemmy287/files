import React, {FC} from 'react';
import s from './addFile.module.scss'
import {TitlePopUp} from "common/components/TitlePopUp/TitlePopUp";
import {Input} from "common/components/Input/Input";
import {Button} from "common/components/Button/Button";
import {useFormik} from "formik";
import {useAppDispatch} from "hooks/useAppDispatch";
import {createFileTC} from "features/Files/filesSlice";

type PropsType = {
  onClose: () => void
}

export const AddFile:FC<PropsType> = ({onClose}) => {

  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      title: '',
      text: ''
    },
    onSubmit(values) {
      dispatch(createFileTC({file: {...values, id: +new Date()}}))
      formik.resetForm()
      onClose()
    }
  })

  return (
    <div className={s.container}>
      <TitlePopUp title={'Добавить файл'} onClose={onClose}/>
      <form onSubmit={formik.handleSubmit}>
        <div className={s.content}>
          <Input component={'input'} title={'Название'} {...formik.getFieldProps('title')}/>
          <Input component={'textarea'} title={'Контент'} {...formik.getFieldProps('text')}/>
          <Button title={'Добавить'} type={'submit'}/>
        </div>
      </form>
    </div>
  );
};

