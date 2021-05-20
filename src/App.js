import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Music from './components/Music/Music';
import Photos from './components/Photos/Photos';
import Blog from './components/Blog/Blog';
import Article from './components/Blog/Article';
import Video from './components/Video/Video';
import Shop from './components/Shop/Shop';
import Donors from './components/Donors/Donors';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route component={Home} path="/" exact={true} />
            <Route component={About} path="/about" />
            <Route component={Music} path="/music" />
            <Route component={Photos} path="/photos" />
            <Route component={Blog} path="/blog" exact={true} />
            <Route component={Article} path="/blog/:slug" exact={true} />
            <Route component={Video} path="/video" />
            <Route component={Shop} path="/merch" />
            <Route component={Donors} path="/donors" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}