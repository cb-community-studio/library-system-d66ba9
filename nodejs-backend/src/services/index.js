const users = require("./users/users.service.js");
const books = require("./books/books.service.js");
const publishers = require("./publishers/publishers.service.js");
const authors = require("./authors/authors.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(books);
  app.configure(publishers);
  app.configure(authors);
    // ~cb-add-configure-service-name~
};
