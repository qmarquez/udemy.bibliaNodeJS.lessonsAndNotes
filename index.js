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

function getBookById(id) {
  return new Promise((resolve, reject) => {
    const book = mock_books.find(book => book.id === id);
    if (!book) {
      const error = new Error('Book not found!');
      reject(error);
    }

    resolve(book);
  });
}

function getAuthorById(id) {
  return new Promise((resolve, reject) => {
    const author = mock_authors.find(author => author.id === id);
    if (!author) {
      const error = new Error('Author not found!');
      reject(error);
    }

    resolve(author);
  })
}

getBookById(11)
  .then(book => {
    return getAuthorById(book.id);
  })
  .then(author => {
    return console.log(author);
  })
  .catch(console.log);