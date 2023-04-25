import React, {FC} from 'react';
import s from './file.module.scss'
import {FileType} from "features/Files/filesApi";

type PropsType = {
  file: FileType
}

export const File:FC<PropsType> = ({file}) => {

  const {id, title, text} = file

  return (
    <div className={s.fileContainer}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.text}>{text}</p>
    </div>
  );
};

