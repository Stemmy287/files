import React from 'react';
import s from './addFile.module.scss'
import {TitlePopUp} from "common/components/TitlePopUp/TitlePopUp";
import {Input} from "common/components/Input/Input";
import {Button} from "common/components/Button/Button";

export const AddFile = () => {
  return (
    <div className={s.container}>
      <TitlePopUp title={'Добавить файл'} onCloseHandler={() => {}}/>
      <div className={s.content}>
        <Input component={'input'} title={'Название'} value={''} onChange={() => {}} name={''}/>
        <Input component={'textarea'} title={'Контент'} value={''} onChange={() => {}} name={''}/>
        <Button title={'Добавить'}/>
      </div>
    </div>
  );
};

