import React, { useEffect, useState } from "react";
import NewItem from "./NewItem";
import Loading from "./Loading";
import "../Assets/Styles/news.css";

export default function Searching(props) {
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(false);
  const [searchedList, setSearchedList] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(props.category);
    updatenews();
  }, [props.searches]);

  const updatenews = async () => {
    try {
      // props.Progress(10);
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${
          props.category ? props.category : "general"
        }&page=${page}&apiKey=${props.api_key}&pagesize=${90}`
      );
      const data = await response.json();
      // props.Progress(30);

      // console.log(props.searches);

      const searchedArticles = data.articles.filter(
        (article) =>{
         let description=article.description? article.description.toLowerCase().includes(props.searches.toLowerCase()):'';
         let title =   article.title.toLowerCase().includes(props.searches.toLowerCase())
         return title||description;
        });

      console.log(searchedArticles);
      setSearchedList(searchedArticles);
      setTotal(data.totalResults);

      setLoading(false);
      setLoading1(false);
      // props.Progress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
      setLoading1(false);
    }
    // props.Progress(80);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior if supported
    });
  };

  const IMG =
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/paytm-ceo-vijay-shekhar-sharma-reportedly-met-union-finance-minister-nirmala-sitharaman-060536286-16x9_0.jpg?VersionId=eGKZLGaWlDfNRC2fYIq3hsw0kNNfxO.c";

  return (
    <div className="container" style={{ marginTop: "10vw" }}>
      <h1 className="text-center heading" draggable={false}>
        Indian News - <span className="spanheading">Daily Headings</span>
      </h1>
      <div
        align="right"
        style={{
          fontFamily: "times new roman",
          marginBottom: "5%",
        }}
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

      {!loading && (
        <div className="row d-flex justify-content-between">
          {searchedList.map((element) => (
            <div
              className="col-sm-12 col-md-6 col-lg-6 col-xl-4"
              key={element.url}
            >
              <NewItem
                title={element.title ? element.title.slice(0, 50) + "..." : ""}
                publish={element.publishedAt}
                description={
                  element.description
                    ? element.description.slice(0, 250) + "..."
                    : "Click on more to read further. It will take you to the given link..."
                }
                url={element.urlToImage ? element.urlToImage : IMG}
                btn={element.title}
                newUrl={element.url}
                author={element.author}
                time={element.publishedAt}
                sourcename={element.source}
              />
            </div>
          ))}
          {loading && <Loading />}
        </div>
      )}
    </div>
  );
}
