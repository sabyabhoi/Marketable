const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const middlewares = require("./middlewares");
const mobiles = require("./routes/Mobile");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/mobiles", mobiles);

app.get("/", (req, res) => {
  res.json({ message: "Marketable" });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
