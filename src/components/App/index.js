import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Routes,
} from 'react-router-dom';
import Landing from '../Landing';
import FAQs from '../Faqs';
import Ecosystem from '../Ecosystem';
import About from '../About/about';

import * as ROUTES from '../../constants/routes';

import { FooterNav, LandingNavCollapse } from '../Navigation';

const App = () => (
  <Router>
    
        <LandingNavCollapse />
        <Routes>
            <Route exact path={ROUTES.LANDING} element={<Landing/>} />
            <Route path={ROUTES.ECOSYSTEM} element={<Ecosystem/>} />
            <Route path={ROUTES.FAQS} element={<FAQs/>} />
            <Route path={ROUTES.ABOUT} element={<About/>} />
        </Routes>
        <FooterNav />
    
    
  </Router>
);

export default App;