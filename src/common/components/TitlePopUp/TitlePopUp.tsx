import React, {FC} from 'react';
import s from "common/components/TitlePopUp/titlePopUp.module.scss";
import close from "common/icons/Close.svg";

type TitlePopUpType = {
  title: string
  onClose: () => void
}

export const TitlePopUp: FC<TitlePopUpType> = ({
                                          title,
                                          onClose
                                        }) => {
  return (
    <div className={s.header}>
      <h4>{title}</h4>
      <img src={close} alt={'close'} onClick={onClose}/>
    </div>
  );
};
