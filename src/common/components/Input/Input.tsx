import React, {FC} from 'react';
import s from './input.module.scss'
import {FieldInputProps} from "formik";

type PropsType = {
  component: 'input' | 'textarea'
  title: string
  dataFormik: FieldInputProps<any>

}

export const Input: FC<PropsType> = ({title, component, dataFormik}) => {
  return (
    <div className={s.inputContainer}>
      <span>{title}</span>
      {component === 'input'
        ? <input type="text" {...dataFormik}/>
        : <textarea {...dataFormik}></textarea>
      }
    </div>
  );
};

