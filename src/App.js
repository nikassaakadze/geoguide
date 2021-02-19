import React from 'react';
import Header from './components/Header'
import Slider from './components/slider/Slider'
import Places from './components/Places'
import PlacesMap from './components/PlacesMap'
import Application from './components/Application'
import Footer from './components/Footer'
import PlaceInfo from './components/PlaceInfo'
import Location from './components/Location'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PlacesPage from './components/places/PlacesPage';

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/places/:sideId">
              <PlacesPage />
            </Route>
            <Route path="/Place/:sideId/:placeId">
              <PlaceInfo />
            </Route>
            <Route path="/map/:placeId/:sideId">
              <Header />
              <Location/>
            </Route>
            <Route exact path="/">
              <Header />
              <Slider/>
              <Places/>
              <Application />
              <PlacesMap />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
