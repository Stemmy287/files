import React, {FC} from 'react';
import s from './button.module.scss'

type PropsType = {
  title: string
  callback?: () => void
  type?: "button" | "submit" | "reset"
  isNoBackGround?: boolean
  disabled?: boolean
}

export const Button: FC<PropsType> = ({
                                        title,
                                        callback,
                                        type,
                                        isNoBackGround,
                                        disabled
                                      }) => {

  return (
    <button
      type={type || 'button'}
      className={isNoBackGround ? `${s.btn} ${s.noBorder}` : s.btn}
      onClick={callback}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

