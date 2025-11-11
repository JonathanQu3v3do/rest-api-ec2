import { Router } from "express";
import {
  getStudents,
  getStudentsById,
  createStudents,
  updateStudents,
  deleteStudents,
} from "../controllers/students.controllers.js";

const router = Router();

router.get("/alumnos", getStudents);
router.get("/alumnos/:id", getStudentsById);
router.post("/alumnos", createStudents);
router.put("/alumnos/:id", updateStudents);
router.delete("/alumnos/:id", deleteStudents);

export default router;