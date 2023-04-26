import React, {FC, useEffect} from 'react';
import s from 'common/components/AddOrEditFile/addOrEditFile.module.scss'
import {TitlePopUp} from "common/components/TitlePopUp/TitlePopUp";
import {InputForm} from "common/components/InputForm/InputForm";
import {Button} from "common/components/Button/Button";
import {useFormik} from "formik";
import {useAppDispatch} from "hooks/useAppDispatch";
import {createFileTC, updateFileTC} from "features/Files/filesSlice";
import * as Yup from 'yup';
import {FileType} from "features/Files/filesApi";

type PropsType = {
  onClose: () => void
  isEdit?: boolean
  file?: FileType
  title: string
  buttonTitle: string
}

export const AddOrEditFile:FC<PropsType> = ({onClose, isEdit, file, title, buttonTitle}) => {

  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      title: '',
      text: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().max(12, 'Максимальное количество символов 12').required('Обязательное поле'),
      text: Yup.string().max(2000, 'Максимальное количество символов 2000').required('Обязательное поле')
    }),
    onSubmit(values) {
      if (isEdit && file) {
        dispatch(updateFileTC({...values, id: file.id}))
      } else {
        dispatch(createFileTC({file: {...values, id: +new Date()}}))
      }
      formik.resetForm()
      onClose()
    }
  })

  useEffect(() => {
    if (file){
      formik.setValues({title: file.title, text: file.text})
    }
  }, [file?.title, file?.text, file])

  return (
    <div className={s.container}>
      <TitlePopUp title={title} onClose={onClose}/>
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
            title={buttonTitle}
            type={'submit'}
            disabled={!!formik.errors.title || !!formik.errors.text || !formik.values.title || !formik.values.text}/>
        </div>
      </form>
    </div>
  );
};

