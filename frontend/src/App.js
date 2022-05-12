import React, {Component} from 'react';
import {Navigate, Outlet, Routes, Route, BrowserRouter} from "react-router-dom";
import {useNavigate} from 'react-router';
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
      <Route path="/data" element={<HomePage />} />
    </Routes> 
  );
  }
}

export default App;


