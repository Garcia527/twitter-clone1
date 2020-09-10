import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './App.css';

function App() {
  return (
    // following the bem convention
    <div className="app">

      { /* Sidebar */ }
      <Sidebar />

      { /* Feed */ }
      <Feed />

      { /* Widgets */ }

    </div>
  );
}

export default App;
