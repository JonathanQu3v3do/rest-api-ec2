import express from "express";
import studentsRoutes from "./routes/students.routes.js";
import teachersRoutes from "./routes/teachers.routes.js";
import morgan from "morgan";
import { PORT } from "./config.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(studentsRoutes, teachersRoutes);

app.listen(PORT);
console.log("Server on port", PORT);