import "./Assets/Styles/App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import News from "./Components/News";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Searching from "./Components/Searching";

export default function App() {
  const api_key = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [searchedList, SetSearchedList] = useState([]);
  const [searches, setSearches] = useState("");
  const [category, setCategory] = useState("general");
  // const [page, setPage] = useState(1);

  return (
    <>
      <Router>
        <Navbar
          api_key={api_key}
          key={"general"}
          Progress={setProgress}
          pageSize={12}
          searches={searches}
          setSearches={setSearches}
          setCategory={setCategory}
          category={category}
        />
        <LoadingBar
          shadow={true}
          loaderSpeed={2000}
          waitingTime={1500}
          color="#f11946"
          progress={progress}
          height={10}
          onLoaderFinished={() => setProgress(0)}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                api_key={api_key}
                Progress={setProgress}
                pageSize={12}
                key={"general"}
                category="general"
                // page={page}
                // setPage={setPage}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                // page={page}
                // setPage={setPage}
                api_key={api_key}
                Progress={setProgress}
                pageSize={12}
                key={"business"}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                // page={page}
                // setPage={setPage}
                api_key={api_key}
                Progress={setProgress}
                pageSize={12}
                key={"entertainment"}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                // page={page}
                // setPage={setPage}
                api_key={api_key}
                Progress={setProgress}
                pageSize={12}
                key={"health"}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                // page={page}
                // setPage={setPage}
                api_key={api_key}
                Progress={setProgress}
                pageSize={12}
                key={"science"}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                // page={page}
                // setPage={setPage}
                api_key={api_key}
                Progress={setProgress}
                pageSize={12}
                key={"sports"}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                // page={page}
                // setPage={setPage}
                api_key={api_key}
                Progress={setProgress}
                pageSize={12}
                key={"technology"}
                category="technology"
              />
            }
          />

          <Route
            exact
            path="/search"
            element={
              <Searching
                api_key={api_key}
                Progress={setProgress}
                // page={page}
                // setPage={setPage}
                searchedList={searchedList}
                SetSearchedList={SetSearchedList}
                searches={searches}
                category={category}
              />
            }
          />

          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route
            exact
            path="/ContactUs"
            element={<ContactUs Progress={setProgress} />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
