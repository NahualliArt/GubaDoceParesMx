import React, { Component, Suspense } from 'react';

import { useTranslation, withTranslation, Trans } from 'react-i18next';

import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.scss';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Classes from './pages/Classes';
import Contact from './pages/Contact';

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">

        <Router>
          <NavBar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/aboutUs' exact component={AboutUs}/>
            <Route path='/classes' exact component={Classes}/>
            <Route path='/contact' exact component={Contact}/>
          </Switch>
        </Router>

    </div>
  );
}

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}

export default App;
