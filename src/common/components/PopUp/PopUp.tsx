import React, {FC} from 'react';
import s from 'common/components/PopUp/popUp.module.scss'

type PropsType = {
  isActive: boolean
  onClose: () => void
  children: JSX.Element
}

export const PopUp: FC<PropsType> = ({
                                       isActive,
                                       onClose,
                                       children
                                     }) => {

  return (
    <div className={isActive ? `${s.modal} ${s.active}` : s.modal} onClick={onClose}>
      <div className={s.content} onClick={(e) => {e.stopPropagation()}}>
        {children}
      </div>
    </div>
  );
};