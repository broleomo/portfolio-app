import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import BaseLayout from './components/BaseLayout';
import Portfolio from './components/Portfolio';
import About from './components/About';
import SplashPage from './components/SplashPage';
import Contact from './components/Contact';
import References from './components/References';



ReactDOM.render(
<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route path="/contact" component={Contact}/>
      <Route path="/references" component={References}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/about" component={About}/>
      <Route path="/home" component={Home}/>
      <Route exact path="/" component={SplashPage}/>
    </Switch>
  </BaseLayout>
</BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
