const ctrlWrapper = action => {
  const func = async (request, response, next) => {
    try {
      await action(request, response, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

module.exports = ctrlWrapper;
