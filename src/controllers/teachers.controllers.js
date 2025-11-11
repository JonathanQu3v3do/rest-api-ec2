let teachers = [];
let nextTeacherId = 1;

export const getTeachers = (req, res) => {
  try {
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTeachersById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const teacher = teachers.find((u) => u.id === id);

    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createTeachers = (req, res) => {
  try {
    const { numeroEmpleado, nombres, apellidos, horasClase } = req.body;

    if (!numeroEmpleado || !nombres || !apellidos || horasClase == null) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (
      typeof numeroEmpleado !== "number" ||
      typeof nombres !== "string" ||
      typeof apellidos !== "string" ||
      typeof horasClase !== "number"
    ) {
      return res.status(400).json({ message: "Invalid data types" });
    }

    const newTeacher = {
      id: nextTeacherId++,
      numeroEmpleado,
      nombres,
      apellidos,
      horasClase,
    };
    teachers.push(newTeacher);

    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTeachers = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { numeroEmpleado, nombres, apellidos, horasClase } = req.body;

    const teacherIndex = teachers.findIndex((u) => u.id === id);

    if (teacherIndex === -1) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    if (!numeroEmpleado || !nombres || !apellidos || horasClase == null) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (
      typeof numeroEmpleado !== "number" ||
      typeof nombres !== "string" ||
      typeof apellidos !== "string" ||
      typeof horasClase !== "number"
    ) {
      return res.status(400).json({ message: "Invalid data types" });
    }

    teachers[teacherIndex] = {
      id,
      numeroEmpleado,
      nombres,
      apellidos,
      horasClase,
    };

    res.status(200).json(teachers[teacherIndex]);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTeachers = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const teacherIndex = teachers.findIndex((u) => u.id === id);

    if (teacherIndex === -1) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    teachers.splice(teacherIndex, 1);

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
