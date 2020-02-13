class ValidationError extends Error {
  constructor(message, status = 401) {
    super(message);
    this.status = status;
  }
}

module.exports = ValidationError;