import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.router.js";
import postitRouter from "./routes/postit.router.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(cookieParser());

app.use("/api", authRouter);
app.use("/api", postitRouter);

export default app;
