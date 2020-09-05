import React from 'react';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    // following the bem convention
    <div className="app">
      <h1> Twitter clone</h1>

      { /* Sidebar */ }
      <Sidebar />

      { /* Feed */ }

      { /* Widgets */ }

    </div>
  );
}

export default App;
