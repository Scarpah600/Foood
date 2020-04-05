'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoria-controller');

let _ctl = new controller();

router.get('/', _ctl.get);
router.get('/:id',_ctl.getById);
router.post('/', _ctl.post);
router.put('/:id', _ctl.put);
router.delete('/:id', _ctl.delete);

module.exports = router;