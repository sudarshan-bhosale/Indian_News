import React from "react";
import { Link } from "react-router-dom";
import img from "../Assets/Images/logo.png";
import Searching from "./Searching";

export default function Navbar(props) {
  const mystyle = {
    fontSize: "100%",
  };

  let change_input = async (event) => {
    if (
      (event.keyCode >= 65 && event.keyCode <= 90) ||
      (event.keyCode >= 97 && event.keyCode <= 122) ||
      event.key === " "
    ) {
      props.setSearches(props.searches + event.key);
    } else if (event.key === "Backspace") {
      if (props.searches.length > 0) {
        props.setSearches(props.searches.slice(0, -1));
      }
    }

    if (props.searches.toLowerCase() === "sports")
     props.setCategory("sports");
    else if (props.searches.toLowerCase() === "technology")
      props.setCategory("technology");
    else if (props.searches.toLowerCase() === "health")
      props.setCategory("health");
    else if (props.searches.toLowerCase() === "business")
      props.setCategory("business");
    else if (props.searches.toLowerCase() === "entertainment")
      props.setCategory("entertainment");
      else if (props.searches.toLowerCase() === "science")
      props.setCategory("science");
    else
    props.setCategory("general");
    // console.log(props.pageSize);

    // console.log(event.key);

    let input_box=document.querySelector('.input_box');

    if(event.key==='Enter'){
        input_box.value='';
        // props.setSearches('')
    }
    // console.log(props.searches);
    <Searching
      api_key={props.api_key}
      searchedList={props.searchedList}
      SetSearchedList={props.SetSearchedList}
      Progress={props.setProgress}
      searches={props.searches}
      category={props.category}
    />
  };

  let searchbtn = () => {
    
    // console.log(props.pageSize);
    <Searching
      api_key={props.api_key}
      searchedList={props.searchedList}
      SetSearchedList={props.SetSearchedList}
      Progress={props.setProgress}
      searches={props.searches}
      category={props.category}
    />;
  };

  const entertainmentCategory = () => {
    props.setCategory("entertainment");
  };
  const businessCategory = () => {
    props.setCategory("business");
  };
  const healthCategory = () => {
    props.setCategory("entertainment");
  };
  const scienceCategory = () => {
    props.setCategory("science");
  };
  const technologyCategory = () => {
    props.setCategory("technology");
  };

  const sportsCategory = () => {
    props.setCategory("sports");
  };

  return (
    <div className="m-0">
      <nav
        className="navbar navbar-expand-lg  bg-dark navbar-bar"
        style={{ zIndex: "1", width: "100%", position: "fixed", top: "0" }}
      >
        <div
          className="container-fluid"
          style={{ fontFamily: "times new roman" }}
        >
          <Link
            className="navbar-brand  text-light "
            to="/"
            style={{
              fontSize: "25px",
              fontFamily: "times new roman",
              textShadow: "0px 2px 3px purple",
            }}
          >
            <img
              src={`${img}`}
              alt=""
              style={{
                height: "60px",
                width: "100px",
                borderRadius: "15%",
                objectFit: "contain",
                mixBlendMode: "lighten",
                opacity: "0.5",
                border: "inherit",
              }}
            />{" "}
          </Link>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active  text-light "
                  aria-current="page"
                  to="/"
                  style={{ fontSize: "20px", textShadow: "0px 2px 3px purple" }}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="/general"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontSize: "20px", textShadow: "0px 2px 3px purple" }}
                >
                  Category
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      style={mystyle}
                      to="/entertainment"
                      onClick={entertainmentCategory}
                    >
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      style={mystyle}
                      onClick={businessCategory}
                      to="/business"
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      style={mystyle}
                      to="/health"
                      onClick={healthCategory}
                    >
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      style={mystyle}
                      to="/science"
                      onClick={scienceCategory}
                    >
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      style={mystyle}
                      onClick={sportsCategory}
                      to="/sports"
                    >
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      style={mystyle}
                      to="/technology"
                      onClick={technologyCategory}
                    >
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link  text-light"
                  to="/contactus"
                  style={{ fontSize: "20px", textShadow: "0px 2px 3px purple" }}
                >
                  ContactUs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  text-light"
                  to="/aboutus"
                  style={{ fontSize: "20px", textShadow: "0px 2px 3px purple" }}
                >
                  AboutUs
                </Link>
              </li>
            </ul>
            <div className="d-flex ">
              <Link
                to="/search"
                className="mx-4"
                style={{ textDecoration: "none" }}
              >
                <input
                  className="form-control me-2 input_box "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onKeyDown={change_input}
                />
              </Link>

              <div className="btn btn-outline-success" type="submit">
                <Link
                  to="/search"
                  onClick={searchbtn}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
