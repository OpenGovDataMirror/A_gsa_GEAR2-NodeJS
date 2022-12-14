const express = require('express');
const cap = require('./capability');
const capsso = require('./capability_sso');
const app = require('./application');
const appTIME = require('./apptime');
const fisma = require('./fisma');
const fismaexp = require('./fismaexp');
const poc = require('./poc');
const its = require('./itstandards');
const interfaces = require('./interface');
const interfacesv2 = require('./interfacev2');
const investment = require('./investment');
const org = require('./organization');
const sys = require('./parentsystem');
const mng = require('./managerpage');
const retiredPage = require('./retiredapps');
const search = require('./search');

const router = express.Router();

router.use('/applications', app);
router.use('/apptime', appTIME);
router.use('/capabilities', cap);
router.use('/capabilities_by_sso', capsso);
router.use('/fisma', fisma);
router.use('/fismaexp', fismaexp);
router.use('/itstandards', its);
router.use('/interfaces', interfaces);
router.use('/interfacesv2', interfacesv2);
router.use('/investments', investment);
router.use('/organizations', org);
router.use('/parentsystems', sys);
router.use('/pocs', poc);
router.use('/managerpage', mng);
router.use('/applications_retired', retiredPage);
router.use('/search', search);

module.exports = router;
