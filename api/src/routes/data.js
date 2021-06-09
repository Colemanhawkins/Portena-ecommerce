const { Router } = require("express");
const router = Router();
const {getData } = require('../controllers/data')

router.post("/", getData);

module.exports = router;
