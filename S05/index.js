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

async function getBookById(id) {
  const book = mock_books.find(book => book.id === id);
  if (!book) {
    throw new Error('Book not found!');
  }

  return book;
}

async function getAuthorById(id) {
  const author = mock_authors.find(author => author.id === id);
  if (!author) {
    throw new Error('Author not found!');
  }

  return author;
}

async function main(book_id) {
  try {
    const book = await getBookById(book_id);
    const author = await getAuthorById(book.id);

    return console.log(author);
  } catch (error) {
    return console.log(error.message)
  }
}

main(1);