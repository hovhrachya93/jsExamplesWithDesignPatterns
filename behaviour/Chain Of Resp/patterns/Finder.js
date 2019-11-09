const Category = require("./Category");
class Finder {
  constructor(name, courses = []) {
    this.name = name;
    this.courses = courses;

    const js = new Category("javaScript", courses.js);
    const java = new Category("java", courses.java);
    const python = new Category("python", courses.python);

    js.setNext(java);
    java.setNext(python);

    this.category = js;
  }

  find(itemName) {
    return this.category.search(itemName);
  }
}

module.exports = Finder;
