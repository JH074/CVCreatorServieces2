const express = require('express');
const router = express.Router();

const requireAuth = require('../middleware/requireAuth');

const {
    createCv,
    getCvs,
    getOneCv,
    updateCv
} = require("../controllers/cv.controller");

router.use(requireAuth);

router.post("/", createCv);
router.get("/", getCvs);
router.get("/:page-:limit", getCvs);

router.get("/:id", getOneCv);
router.patch("/:id", updateCv);


module.exports = router;