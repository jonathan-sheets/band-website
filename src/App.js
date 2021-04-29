import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Music from './components/Music/Music';
import Photos from './components/Photos/Photos';
import Blog from './components/Blog/Blog';
import Video from './components/Video/Video';
import Shop from './components/Shop/Shop';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
      
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Music} path="/music" />
          <Route component={Photos} path="/photos" />
          <Route component={Blog} path="/blog" />
          <Route component={Video} path="/video" />
          <Route component={Shop} path="/shop" />
      
        </BrowserRouter>
      </div>
    </div>
  );
}