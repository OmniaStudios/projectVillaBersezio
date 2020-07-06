exports.adminCheck = (req, res, next) => {
    console.log(req);
    if (!req.user) {
      res.redirect('/err/403');
    } else {
      next();
    }
  };