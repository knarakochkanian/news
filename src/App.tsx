import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from "./components/Main";
import News from './components/News'

// eslint-disable-next-line @typescript-eslint/no-use-before-define
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/news/:id" element={<News />}></Route>
      </Routes>
    </div>
  );
}

export default App;
