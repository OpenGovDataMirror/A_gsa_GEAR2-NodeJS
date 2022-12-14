const express = require('express');
const investmentCtrl = require('../../controllers/investment');

const router = express.Router();

router.route('/')
    .get(investmentCtrl.findAll);

router.route('/:id')
    .get(investmentCtrl.findOne);

// children
router.route('/:id/applications/')
    .get(investmentCtrl.findApplications);

router.route('/:id/pocs/')
    .get(investmentCtrl.findPOCs);

module.exports = router;
