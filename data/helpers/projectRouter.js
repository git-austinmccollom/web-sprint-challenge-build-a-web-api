const express = require("express");
const postFunctions = require("./projectModel");
const actionFunctions = require("./actionModel");
const router = express.Router();

router.get("/", (req, res) => {
    postFunctions.get()
    .then( dbRes => {
        res.status(200).json(dbRes);
    })
    .catch( dbErr => {
        res.status(500).json(dbErr);
    })
})

router.get("/:id", (req, res) => {
    postFunctions.get(req.params.id)
    .then( dbRes => {
        res.status(200).json(dbRes);
    })
    .catch( dbErr => {
        res.status(500).json(dbErr);
    })
})

module.exports = router;