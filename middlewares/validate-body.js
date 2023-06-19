const { HttpError } = require('../helpers');

const validateBody = schema => {
  const func = (request, _, next) => {
    const { error } = schema.validate(request.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    next();
  };
  return func;
};

module.exports = validateBody;
