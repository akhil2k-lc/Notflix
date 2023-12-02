import React from 'react';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cardss from './components/Cardss';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [user, setLoginUSer] = useState({});

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Hero setLoginUSer={setLoginUSer} />
              ) : (
                <Login setLoginUSer={setLoginUSer} />
              )
            }
          />
          <Route
            path="/Login"
            element={<Login setLoginUSer={setLoginUSer} />}
          />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>

      {/* <Cardss />
      <FAQ />
      <Footer /> */}
    </>
  );
}

export default App;
