import React, {FC} from 'react';
import s from './file.module.scss'
import {FileType} from "features/Files/filesApi";
import {ReactComponent as DeleteIcon} from "common/icons/trash-full-svgrepo-com.svg";
import {NavLink} from "react-router-dom";

type PropsType = {
  file: FileType
}

export const File:FC<PropsType> = ({file}) => {

  const {id, title, text} = file

  return (
    <div className={s.fileContainer}>
      <div className={s.wrapper}>
        <NavLink key={id} to={`/file/${id}`}><h2 className={s.title}>{title}</h2></NavLink>
        <p>{text}</p>
      </div>
      <DeleteIcon className={s.deleteIcon}/>
    </div>
  );
};

