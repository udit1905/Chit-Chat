const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.OriginalUrl}`);
  res.status(404);
  next(error);
};

module.exports = notFound;
