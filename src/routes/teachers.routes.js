import { Router } from "express";
import {
  getTeachers,
  getTeachersById,
  createTeachers,
  updateTeachers,
  deleteTeachers,
} from "../controllers/teachers.controllers.js";

const router = Router();

router.get("/profesores", getTeachers);
router.get("/profesores/:id", getTeachersById);
router.post("/profesores", createTeachers);
router.put("/profesores/:id", updateTeachers);
router.delete("/profesores/:id", deleteTeachers);

export default router;
