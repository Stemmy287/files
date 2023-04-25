import React from 'react';
import s from './app.module.scss'
import {Files} from "features/Files/Files";

function App() {
  return (
    <div className={s.appContainer}>
      <Files/>
    </div>
  );
}

export default App;
