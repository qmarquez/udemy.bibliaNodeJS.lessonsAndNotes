const mock_books = [
  {
    id: 1,
    title: 'Clean code'
  }, {
    id: 2,
    title: 'The pragmatic programmer'
  }, {
    id: 3,
    title: 'Web development with Node.js'
  }
];

function getBookById(id, callback) {
  const book = mock_books.find(book => book.id === id);
  if (!book) {
    const error = new Error('Book not found!');
    return callback(error);
  }

  callback(null, book);
}

getBookById(20, (error, book) => {
  if (error) {
    return console.log(error.message);
  }
  return console.log(book);
});