const Instructor = require("../peoples/instructor");
const Student = require("../peoples/student");

const userFactory = (
  type,
  name,
  position,
  earnings = 0,
  level = "Beginner"
) => {
  if (type === "instructor") {
    return new Instructor(type, name, position, earnings);
  }

  if (type === "student") {
    return new Student(type, name, level);
  }
};

module.exports = userFactory;
