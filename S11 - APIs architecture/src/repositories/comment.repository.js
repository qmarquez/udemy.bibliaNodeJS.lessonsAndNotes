const BaseRepository = require('./base.repository');

class CommentRepository extends BaseRepository {
  constructor({ Comment }) {
    super(Comment)
  }
}

module.exports = CommentRepository;