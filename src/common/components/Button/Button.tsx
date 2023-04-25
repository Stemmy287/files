import React, {FC} from 'react';
import s from './button.module.scss'

type PropsType = {
  title: string
  callback?: () => void
  type?: "button" | "submit" | "reset"
}

export const Button:FC<PropsType> = ({title, callback, type}) => {

  return (
    <button type={type || 'button'} className={s.btn} onClick={callback}>{title}</button>
  );
};

