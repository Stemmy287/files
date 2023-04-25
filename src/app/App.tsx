import React from 'react';
import s from './app.module.scss'
import {Pages} from "app/Pages/Pages";

function App() {
  return (
    <div className={s.appContainer}>
      <Pages/>
    </div>
  );
}

export default App;
