const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    // console.log("req ensure", req);
    return next()
  }
  res.redirect('/')
}
module.exports = { ensureAuthenticated }