import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store";

import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
import Login from "../src/pages/Login";
import SignUp from "pages/Signup";

export default function App() {
  return (
    <>
      <GlobalStyles />
      {/* <HotelTravelLandingPage /> */}
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<HotelTravelLandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

