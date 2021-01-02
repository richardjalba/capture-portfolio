import { React } from 'react';
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import MovieDetail from './pages/MovieDetail';
//
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path='/' exact>
          <AboutUs />
        </Route>
        <Route path='/work' exact>
          <Work />
        </Route>
        <Route path='/work/:id'>
          <MovieDetail />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
