export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const newStud = student;
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      if (gradeObj) {
        newStud.grade = gradeObj.grade;
      } else {
        newStud.grade = 'N/A';
      }
      return newStud;
    });
}
