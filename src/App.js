import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';
import ResidenciaPage from './pages/ResidenciaPage';
import NosotrosPage from './pages/NosotrosPage';
import BlogPage from './pages/BlogPage';
import ContactoPage from './pages/ContactoPage';
import CurriculumPage from './pages/CurriculumPage';

import './App.css'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div>
        <Switch>
          <Route path='/curriculum'>
            <CurriculumPage/>
          </Route>
          <Route path='/contacto'>
            <ContactoPage/>
          </Route>
          <Route path='/blog'>
            <BlogPage/>
          </Route>
          <Route path='/nosotros'>
            <NosotrosPage/>
          </Route>
          <Route path='/residencia'>
            <ResidenciaPage/>
          </Route>
          <Route path='/servicios'>
            <ServiciosPage/>
          </Route>
          <Route path='/'>
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
