import React, { useEffect, useState } from "react";
import NewItem from "./NewItem";
import Loading from "./Loading";
import "../Assets/Styles/news.css";

export default function News(props) {
  // document.title="Indian_News/"+props.category[0].toUpperCase()+props.category.slice(1,);

  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading1, setLoading1] = useState(false);

  useEffect(() => {
    updatenews();
  }, []);

  const updatenews = async () => {
    props.Progress(10);
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api_key}&pagesize=${props.pageSize}`
    );
    let data = await response.json();
    props.Progress(30);

    // props.SetSearchList(data.articles);
    // console.log(props.SetSearchedList);
    console.log(props.searches);

    setArticle(data.articles);
    setTotal(data["totalResults"]);
    setLoading(false);
    setLoading1(false);
    props.Progress(70);
    props.Progress(100);
  };

  const clickPrevies = async () => {
    props.Progress(10);
    let num = page;
    console.log(num);
    num--;
    setPage(num);
    setTotal(total);
    setLoading(true); //
    props.Progress(20);

    let number = total + props.pageSize;
    if (number > props.pageSize) {
      let nxBtn = document.querySelector(".clickNext");
      nxBtn.style.display = "flex";
    }
    props.Progress(30);
    if (num === 1) {
      let PrBtn = document.querySelector(".clickPrevies");
      PrBtn.style.display = "none";
      let Btn_div = document.querySelector(".Btn-div");
      Btn_div.style.align = "center";
    }
    props.Progress(50);

    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api_key}&page=${num}&pagesize=${props.pageSize}`
    );
    let data = await response.json();

    console.log(data);

    setLoading(false);
    setArticle(data.articles);
    props.Progress(80);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior if supported
    });
    props.Progress(100);
  };

  const clickNext = async () => {
    props.Progress(10);
    let num = page;
    num++;

    setPage(num);
    setLoading(true);
    props.Progress(20);
    let number = total - props.pageSize;
    if (number < props.pageSize) {
      let nxBtn = document.querySelector(".clickNext");
      nxBtn.style.display = "none";
    }
    props.Progress(30);
    if (num >= 1) {
      let PrBtn = document.querySelector(".clickPrevies");
      PrBtn.style.display = "flex";
    }
    props.Progress(40);

    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api_key}&page=${num}&pagesize=${props.pageSize}`
    );
    let data = await response.json();

    setArticle(data.articles);
    setTotal(total - props.pageSize);
    setLoading(false);
    props.Progress(80);

    window.scrollTo({
      top: 20,
      behavior: "smooth", // Smooth scrolling behavior if supported
    });
    props.Progress(100);
  };

  const IMG =
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/paytm-ceo-vijay-shekhar-sharma-reportedly-met-union-finance-minister-nirmala-sitharaman-060536286-16x9_0.jpg?VersionId=eGKZLGaWlDfNRC2fYIq3hsw0kNNfxO.c";

  // useEffect(() => {
  //   const textElement = document.querySelector(".heading .spanheading");
  //   const heading_item = ["Daily Headlines", "Top Headlines"];
  //   let currentIndex = 0;

  //   function changeText() {
  //     if (textElement) {
  //       textElement.innerText = heading_item[currentIndex];
  //       currentIndex = (currentIndex + 1) % heading_item.length;
  //     }
  //   }

  //   const intervalId = setInterval(changeText, 2000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <div className="container " style={{ marginTop: "10vw" }}>
      <h1 className="text-center heading" draggable={false}>
        Indian News - <span class="spanheading">Daily Headlines</span>
      </h1>
      <div
        align="right"
        style={{ fontFamily: "times new roman", marginBottom: "5%" }}
      >
        <br />
        <span
          style={{
            backgroundColor: "grey",
            fontWeight: "600",
            borderRadius: "2%",
            color: "white",
            padding: "2%",
            fontSize: "1rem",
          }}
        >
          - {props.category[0].toUpperCase() + props.category.slice(1)}
        </span>
      </div>

      {loading1 && <Loading />}

      {article && !loading1 && (
        <div className="row d-flex justify-content-between  ">
          {article.map((element) => {
            return (
              <div
                className="col-sm-12 col-md-6 col-lg-6 col-xl-4 "
                key={element.url}
              >
                <NewItem
                  title={
                    element.title ? element.title.slice(0, 50) + "..." : ""
                  }
                  publish={element.publishedAt}
                  description={
                    element.description
                      ? element.description.slice(0, 150) + "..."
                      : "Click on more to read furthur. it will take you to the given link..."
                  }
                  url={
                    element.urlToImage
                      ? element.urlToImage
                        ? element.urlToImage
                        : IMG
                      : IMG
                  }
                  btn={element.title}
                  newUrl={element.url}
                  author={element.author}
                  time={element.publishedAt}
                  sourcename={element.source}
                />
              </div>
            );
          })}
          {loading && <Loading />}{" "}
          {/* this will execute on state.loading is  true */}
        </div>
      )}
      <div
        align="center"
        className="my-5 d-flex justify-content-between p-3 Btn-div"
      >
        <button
          className="btn btn-dark mx-2 clickPrevies "
          onClick={clickPrevies}
          style={{ display: "none" }}
        >
          {" "}
          &larr; Previes{" "}
        </button>
        <div>
          <button className="btn btn-dark mx-2">Page : {page} </button>
        </div>
        <button className="btn btn-dark clickNext" onClick={clickNext}>
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
