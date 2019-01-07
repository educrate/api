const college = require('./college/college.service.js');
const user = require('./user/user.service.js');
const course = require('./course/course.service.js');
const instructor = require('./instructor/instructor.service.js');
const job = require('./job/job.service.js');
const review = require('./review/review.service.js');
const section = require('./section/section.service.js');
const student = require('./student/student.service.js');
const tutee = require('./tutee/tutee.service.js');
const tutor = require('./tutor/tutor.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(college);
  app.configure(user);
  app.configure(course);
  app.configure(instructor);
  app.configure(instructor);
  app.configure(job);
  app.configure(review);
  app.configure(section);
  app.configure(student);
  app.configure(student);
  app.configure(tutee);
  app.configure(tutor);
};
