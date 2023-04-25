import React, {FC, useState} from 'react';
import s from './file.module.scss'
import {FileType} from "features/Files/filesApi";
import {ReactComponent as DeleteIcon} from "common/icons/trash-full-svgrepo-com.svg";
import {NavLink} from "react-router-dom";
import {Notification} from "common/components/Notification/Notification";
import {PopUp} from "common/components/PopUp/PopUp";
import {useAppDispatch} from "hooks/useAppDispatch";
import {deleteFileTC} from "features/Files/filesSlice";

type PropsType = {
  file: FileType
}

export const File:FC<PropsType> = ({file}) => {

  const {id, title, text} = file

  const [isActive, setIsActive] = useState(false)

  const dispatch = useAppDispatch()

  const deleteHandler = () => {
    dispatch(deleteFileTC({fileId: id}))
  }

  return (
    <div className={s.fileContainer}>
      <div className={s.wrapper}>
        <NavLink to={`/file/${id}`}><h2 className={s.title}>{title}</h2></NavLink>
        <p>{text}</p>
      </div>
      <DeleteIcon className={s.deleteIcon} onClick={() => setIsActive(true)}/>
      <PopUp isActive={isActive} onClose={() => {setIsActive(false)}}>
        <Notification
          title={'Удалить файл'}
          message={'Вы действительно хотите удалить файл'}
          callback={deleteHandler} onClose={() => setIsActive(false)}
        />
      </PopUp>

    </div>
  );
};

