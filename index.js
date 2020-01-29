const mock_books = [
  {
    id: 1, title: 'Clean code',
    author_id: 1
  }, {
    id: 2, title: 'The pragmatic programmer',
    author_id: 1
  }, {
    id: 3, title: 'Web development with Node.js',
    author_id: 2
  }
];

const mock_authors = [
  { id: 1, name: 'Robert C. Martin' },
  { id: 2, name: 'Steve Forest' }
]

function getBookById(id, callback) {
  const book = mock_books.find(book => book.id === id);
  if (!book) {
    const error = new Error('Book not found!');
    return callback(error);
  }

  callback(null, book);
}

function getAuthorById(id, callback) {
  const author = mock_authors.find(author => author.id === id);
  if (!author) {
    const error = new Error('Author not found!');
    return callback(error);
  }

  callback(null, author);
}

getBookById(2, (error, book) => {
  if (error) {
    return console.log(error.message);
  }

  // Starting callbakc hell
  getAuthorById(book.author_id, (error, author) => {
    if (error) {
      return console.log(error.message);
    }

    //  If i need to looking for another thing, a function inside function inside so on.
    // So callback hell.

    return console.log(`This book '${book.title}' was writen by ${author.name}`)
  });

  return console.log(book);
});