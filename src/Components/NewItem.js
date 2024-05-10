import React from "react";
import "../Assets/Styles/news.css";

export default function NewItem(props) {
  let { title, description, url, newUrl, author, time, sourcename, btn } =
    props;

  let timefinal = new Date(time);
  let hour = timefinal.getUTCHours();
  let minute = timefinal.getUTCMinutes();
  let period = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;
  minute = minute < 10 ? "0" + minute : minute;
  let time12Hour = hour + ":" + minute + " " + period;

  const speakerButton = () => {
    const speechSynthesis = window.speechSynthesis;
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
    let textToRead = btn;

    const speechUtterance = new SpeechSynthesisUtterance();
    speechUtterance.text = textToRead;
    speechSynthesis.speak(speechUtterance);
  };

  return (
    <div className="my-3 cart" style={{ height: "520px",display:'flex',justifyContent:'center' }}>
      <div
        className="card  card_animation"
        style={{ width: "21rem", boxShadow: "rgba(0,0,0,0.24) 10px 2px 8px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
            position: "relative",
          }}
        >
          {" "}
          <img
            src={url}
            alt={""}
            className="card-img-top"
            style={{
              objectFit: "cover",
              position: "relative",
              aspectRatio: "1/1",
              width: "20rem",
              borderRadius: "4%",
              height: "200px",
            }}
          />{" "}
        </div>
        <div className="card-body">
          <h5 className="card-title " style={{ fontWeight: "500" }}>
            {title} <br />{" "}
            <span className="badge text-bg-danger mt-2">{sourcename.name}</span>
            <span>
              <small style={{ marginLeft: "20px" }}>
                <button
                  id="speakerButton"
                  aria-label="Read Headings"
                  onClick={speakerButton}
                >
                  &#128266;
                </button>
              </small>
            </span>{" "}
          </h5>

          <p className="card-text" style={{fontSize:'10px'}}>{description}</p>
          <p className="card-text mb-3 " align={"right"}>
            <small className="text-body-secondary  text-muted">
              {" "}
              {author ? "- By " + author.slice(0, 13) + " on" : " - on "}{" "}
              {new Date(time).toGMTString().slice(0, 17)} .
            </small>
            <br />
            <small className="text-body-secondary  text-muted">
              {" "}
              - at {time12Hour} .
            </small>
          </p>
          <a
            href={newUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
