import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Cardcontainer from "../CardContainer";
import Banner from "../Banner";
import Questions from "../Questions";
import Footer from "../Footer";
import SignIn from "../SignIn";

const MainRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/" exact
          element={
            <>
              <Banner />
              <Cardcontainer />
              <Questions />
            </>
          }
        />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
