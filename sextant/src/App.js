import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';


function App() {
  return (
    <div className="App">
      <div>
        <Banner title ="Sextant "/>
      </div>
      <Exhibit heading="My Exhibit">
      </Exhibit>
    </div>
  );
}

export default App;
