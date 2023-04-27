import React, {FC} from 'react';
import s from 'common/components/PopUp/popUp.module.scss'

type PropsType = {
  onClose: () => void
  children: JSX.Element
}

export const PopUp: FC<PropsType> = ({
                                       onClose,
                                       children
                                     }) => {

  return (
    <div className={s.modal} onClick={onClose}>
      <div className={s.content} onClick={(e) => {e.stopPropagation()}}>
        {children}
      </div>
    </div>
  );
};