const express = require('express');
const router = express.Router();
const postapicontroller = require('../../../controllers/apis/v1/productapicontroller')

router.post('/create', postapicontroller.createproduct)
router.get('/', postapicontroller.listproduct)
router.delete('/:ID', postapicontroller.deleteproduct)
router.post('/:ID/update_quantity/',postapicontroller.updateproduct)


module.exports = router;
