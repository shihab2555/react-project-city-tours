import React, {Component} from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import TourList from "./components/TourList";
function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <TourList></TourList>
    </React.Fragment>
  ) 
    
  ;
}

export default App;
