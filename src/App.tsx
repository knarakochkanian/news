import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import News from './components/News'
import NewsList from './components/NewsList';

export interface INews {
  by?: string;
  descendants?: number;
  id?: number;
  kids?: number[];
  score?: number;
  time?: number;
  title?: string;
  type?: string;
  url?: string;
}

const App = () => {
  const [ selectedNews, setSelectedNews ] = useState<INews>({});

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <NewsList setSelectedNews={ setSelectedNews }/> }></Route>
        <Route path="/news/:id" element={ <News selectedNews={ selectedNews }/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
