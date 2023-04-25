import React, {FC} from 'react';
import s from 'common/components/PopUp/popUp.module.scss'

type PropsType = {
  isActive: boolean
  setIsActive: (isActive: boolean) => void
  children: JSX.Element
}

export const PopUp: FC<PropsType> = ({
                                       isActive,
                                       setIsActive,
                                       children
                                     }) => {

  return (
    <div className={isActive ? `${s.modal} ${s.active}` : s.modal} onClick={() => setIsActive(false)}>
      <div className={s.content} onClick={(e) => {e.stopPropagation()}}>
        {children}
      </div>
    </div>
  );
};