import React from 'react';
import {Route, Routes} from "react-router-dom";
import {PATH} from "common/constants/path";
import {Files} from "features/Files/Files";
import {FilePage} from "features/Files/FilePage/FilePage";

export const Pages = () => {
  return (
    <Routes>
      <Route path={PATH.MAIN} element={<Files/>}/>
      <Route path={PATH.FILE} element={<FilePage/>}/>
    </Routes>
  );
};

