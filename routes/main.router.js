const express = require('express');
const router = express.Router();

const profileRouter = require('./profile.router'); 
const cvRouter = require('./cv.router');
const userRouter = require('./user.router');

router.use('/profile', profileRouter);
router.use('/cv', cvRouter);
router.use('/user', userRouter);

module.exports = router;