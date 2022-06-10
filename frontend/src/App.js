import React, {Component} from 'react';
import { Routes, Route} from "react-router-dom";
import HomePage from './components/homePage/home/HomePage'

import Picture from './components/picture/Picture';
import GalleryLayout from './components/gallery/GalleryLayout';

class App extends Component  {
  render() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryLayout/>} />
      <Route path="/picture" element={<Picture />} />
    </Routes> 
  );
  }
}

export default App;


