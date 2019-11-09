const courses = require("./data/courses");
const Finder = require("./patterns/Finder");

const acaFinder = new Finder("Finder ACA", courses);

let searchQuery = "which course do you want to find";
const result = acaFinder.find(searchQuery);

console.log(` ${result.name} - ${result.price}$ - ${result.location}`);
