import React from 'react';
import s from './app.module.scss'
import {Pages} from "app/Pages/Pages";
import {useAppSelector} from "hooks/useAppSelector";
import {isLoadingSelector} from "app/appSelectors";
import {LoadingLine} from "common/components/LoadingLine/LoadingLine";

function App() {

  const isLoading = useAppSelector(isLoadingSelector)

  return (
    <div className={s.appContainer}>
      {isLoading && <LoadingLine/>}
      <Pages/>
    </div>
  );
}

export default App;
