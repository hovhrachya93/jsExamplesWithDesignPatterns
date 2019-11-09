const userFactory = require("./pattern/userFactory");

const gevorg = userFactory("instructor", "Gevorg", "software engineer", 1000);
const hrach = userFactory("student", "Hrach", "Beginner");

console.log(gevorg.toString());
console.log(hrach.toString());
