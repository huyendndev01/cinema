import './App.css';
import {Routes, Route} from "react-router-dom"
import { router } from './router/router';
import defaultLayout from './layouts/defaultLayout';
import { Fragment, useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
        <Routes>
          {router.map((item, id) => {
            let Layout = item.isLayout === null ? Fragment : defaultLayout;
            const Page = item.page
            return (
                 <Route path={item.path} element={<Layout><Page /></Layout>}/>
            )
          })}
        </Routes>
    </div>
  );
}

export default App;
