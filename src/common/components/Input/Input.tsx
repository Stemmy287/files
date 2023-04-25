import React, {ChangeEvent, FC} from 'react';
import s from './input.module.scss'

type PropsType = {
  component: 'input' | 'textarea'
  title: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
  name: string
}

export const Input: FC<PropsType> = ({title, component, value, onChange, name}) => {
  return (
    <div className={s.inputContainer}>
      <span>{title}</span>
      {component === 'input'
        ? <input type="text" value={value} onChange={onChange} name={name}/>
        : <textarea value={value} onChange={onChange} name={name}></textarea>
      }
    </div>
  );
};

