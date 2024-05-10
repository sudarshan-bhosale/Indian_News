const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pg = require("pg");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Indian_News",
  password: "Suraj@123",
  port: 5432,
});

db.connect();

app.post("/contact", (req, res) => {
  try {
    db.query(
      "insert into User_Response values($1,$2,$3,$4,$5)",
      [
        req.body.name,
        req.body.email,
        req.body.message,
        req.body.phone,
        req.body.company,
      ],
      (err, res) => {
        if (err) {
          console.log(err.stack);
        } else {
        }
      }
    );
  } catch (err) {
    console.log("error during data storing ", err);
  }
  res.status(200).json({ message: "Form submitted successfully" });

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
