let students = [];
let nextStudentId = 1;

export const getStudents = (req, res) => {
  try {
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getStudentsById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const student = students.find((u) => u.id === id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createStudents = (req, res) => {
  try {
    const { nombres, apellidos, matricula, promedio } = req.body;

    if (!nombres || !apellidos || !matricula || promedio == null) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (
      typeof nombres !== "string" ||
      typeof apellidos !== "string" ||
      typeof matricula !== "string" ||
      typeof promedio !== "number"
    ) {
      return res.status(400).json({ message: "Invalid data types" });
    }

    const newStudent = {
      id: nextStudentId++,
      nombres,
      apellidos,
      matricula,
      promedio,
    };
    students.push(newStudent);

    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateStudents = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nombres, apellidos, matricula, promedio } = req.body;

    const studentIndex = students.findIndex((u) => u.id === id);

    if (studentIndex === -1) {
      return res.status(404).json({ message: "Student not found" });
    }

    if (!nombres || !apellidos || !matricula || promedio == null) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (
      typeof nombres !== "string" ||
      typeof apellidos !== "string" ||
      typeof matricula !== "string" ||
      typeof promedio !== "number"
    ) {
      return res.status(400).json({ message: "Invalid data types" });
    }

    students[studentIndex] = { id, nombres, apellidos, matricula, promedio };

    res.status(200).json(students[studentIndex]);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteStudents = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const studentIndex = students.findIndex((u) => u.id === id);

    if (studentIndex === -1) {
      return res.status(404).json({ message: "Student not found" });
    }

    students.splice(studentIndex, 1);

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
