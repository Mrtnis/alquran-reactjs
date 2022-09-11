import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

// view page
import { Ayat } from '../view/ayat/Ayat';
import { ListSurah } from '../view/surah/ListSurah';
import { NotFound } from '../view/notFound/NotFound';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ListSurah />}></Route>
      <Route path="surah/:idSurah" element={<Ayat />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default Router;
