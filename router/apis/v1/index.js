const express = require('express');
const router = express.Router();



router.use('/products',require('./productrouter'));


module.exports = router;

