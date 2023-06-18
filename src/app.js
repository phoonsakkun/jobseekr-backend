const authRoute = require("./routes/authRoute");
require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const jobRoute = require("./routes/jobRoute");
const searchRoute = require("./routes/searchRoute");
const userRoute = require("./routes/userRoute");
const morgan = require("morgan");
const authenticateMiddleware = require("./middlewares/authenticate");
const notFoundMiddleware = require("./middlewares/notFound");
const errorMiddleware = require("./middlewares/error");
const helmet = require("helmet");

const app = express();
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(
  rateLimit({
    windowMs: 1000 * 60 * 1,
    max: 1000,
    message: { message: "too many requests" },
  })
);

app.use(helmet());
app.use(express.json());

// app.use("/", guestRoute);
app.use("/auth", authRoute);
app.use("/users", authenticateMiddleware, userRoute);
app.use("/jobs", jobRoute);
app.use("/search", searchRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server run on port" + port));
