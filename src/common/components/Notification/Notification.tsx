import React, {FC} from 'react';
import s from './notification.module.scss'
import {Button} from "common/components/Button/Button";
import {TitlePopUp} from "common/components/TitlePopUp/TitlePopUp";

type PropsType = {
  title: string
  message: string
  callback: () => void
  onClose: () => void
}

export const Notification:FC<PropsType> = ({title, message, callback, onClose}) => {

  const onClickHandler = () => {
    callback()
    onClose()
  }

  return (
    <div className={s.container}>
      <TitlePopUp title={title} onClose={onClose}/>
      <div className={s.content}>
        <div className={s.message}>
          <span>{message}</span>
        </div>
        <div className={s.buttons}>
          <Button isNoBackGround title={'No'} callback={onClose}/>
          <Button title={'Yes'} callback={onClickHandler}/>
        </div>
      </div>
    </div>
  );
};

