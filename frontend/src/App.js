import React, {Component} from 'react';
import { Routes, Route} from "react-router-dom";
import HomePage from './components/homePage/home/HomePage'
import Gallery from './components/gallery/Gallery';
import Picture from './components/picture/Picture';

class App extends Component  {
  render() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/picture" element={<Picture />} />
    </Routes> 
  );
  }
}

export default App;


