import React from 'react';
import s from './app.module.scss'
import {Pages} from "app/Pages/Pages";
import {useAppSelector} from "hooks/useAppSelector";
import {errorSelector, isLoadingSelector} from "app/appSelectors";
import {LoadingLine} from "common/components/LoadingLine/LoadingLine";
import {ErrorBar} from "common/components/ErrorBar/ErrorBar";

function App() {

  const isLoading = useAppSelector(isLoadingSelector)
  const error = useAppSelector(errorSelector)

  return (
    <div className={s.appContainer}>
      {isLoading && <LoadingLine/>}
      <Pages/>
      {error && <ErrorBar/>}
    </div>
  );
}

export default App;
