import React, {FC} from 'react';
import s from './addFile.module.scss'
import {TitlePopUp} from "common/components/TitlePopUp/TitlePopUp";
import {InputForm} from "common/components/InputForm/InputForm";
import {Button} from "common/components/Button/Button";
import {useFormik} from "formik";
import {useAppDispatch} from "hooks/useAppDispatch";
import {createFileTC} from "features/Files/filesSlice";
import * as Yup from 'yup';

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
    validationSchema: Yup.object({
      title: Yup.string().max(12, 'Максимальное количество символов 12').required('Обязательное поле'),
      text: Yup.string().required('Обязательное поле')
    }),
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
          <div>
            <InputForm component={'input'} title={'Название'} dataFormik={{...formik.getFieldProps('title')}}/>
            {formik.touched.title && formik.errors.title && <div className={s.error}>{formik.errors.title}</div>}
          </div>
          <div>
            <InputForm component={'textarea'} title={'Контент'} dataFormik={{...formik.getFieldProps('text')}}/>
            {formik.touched.text && formik.errors.text && <div className={s.error}>{formik.errors.text}</div>}
          </div>
          <Button
            title={'Добавить'}
            type={'submit'}
            disabled={!!formik.errors.title || !!formik.errors.text || !formik.values.title || !formik.values.text}/>
        </div>
      </form>
    </div>
  );
};

