import React, {FC} from 'react';
import s from './button.module.scss'

type PropsType = {
  title: string
}

export const Button:FC<PropsType> = ({title}) => {
  return (
    <button className={s.btn}>{title}</button>
  );
};

