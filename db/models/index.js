const Campus = require("./campus");
const Student = require("./student");

//Association: One-to-many
//Students may be associated with at most one campus. Campuses may be associated with may students.
Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  Campus,
  Student,
};
