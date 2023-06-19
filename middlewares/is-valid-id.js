const { isValidObjectId } = require('mongoose');

const { HttpError } = require('../helpers');

const isValidId = (request, _, next) => {
  const { id } = request.params;
  if (!isValidObjectId(id)) {
    next(HttpError(400, `${id} is not valid id. Try another please`));
  }
  next();
};

module.exports = isValidId;
