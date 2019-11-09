const { Course, CourseServicesFacade } = require("./course");

const myCourse = new Course({
  name: "jsLessons",
  project: "HomeWork"
});

console.log(myCourse);
CourseServicesFacade.CompleteMethod(myCourse);
console.log(myCourse);
