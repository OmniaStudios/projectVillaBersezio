exports.adminCheck = (req, res, next) => {
    if (!req.user) {
      res.redirect('/err/403');
    } else {
      next();
    }
  };