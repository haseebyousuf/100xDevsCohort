const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(
  'mongodb://haseebyousuff:qNJHlL8JL8q91EOI@ac-gplxwut-shard-00-00.kfkjhcl.mongodb.net:27017,ac-gplxwut-shard-00-01.kfkjhcl.mongodb.net:27017,ac-gplxwut-shard-00-02.kfkjhcl.mongodb.net:27017/?replicaSet=atlas-frnrro-shard-0&ssl=true&authSource=admin'
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  price: Number,
  image: String,
});
const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  courses: [CourseSchema],
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
