const router = require('express').Router();

const {
  signUp,
  mainPage,
  login,
  deleteUser,
  changePassword,
  logout
} = require('../controllers/userControllers');

const { ensureAuthenticated } = require('../../ensure');
router.route('/signup').post(signUp);
router.route('/login').post(login);
router.route('/main').get(ensureAuthenticated, mainPage);
router.route('/delete').post(deleteUser);
router.route('/change').post(changePassword, login);
router.route('/logout').get(logout);
module.exports = router;