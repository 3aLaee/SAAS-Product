import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';
import Feature from './Feature';
import Stores from './Stores';
import Banner from './Banner'; // Import the Banner component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/feature" component={Feature} />
          <Route path="/stores" component={Stores} />
        </Routes>
        <Banner /> {/* Render the Banner component */}
      </div>
    </Router>
  );
};

export default App;
