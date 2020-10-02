const express = require("express");
const postFunctions = require("./projectModel");
const actionFunctions = require("./actionModel");
const router = express.Router();

router.get("/", (req, res) => {
    actionFunctions.get()
    .then( dbRes => {
        res.status(200).json(dbRes);
    })
    .catch( dbErr => {
        res.status(500).json(dbErr);
    })
})

router.get("/:id", (req, res) => {
    actionFunctions.get(req.params.id)
    .then( dbRes => {
        res.status(200).json(dbRes);
    })
    .catch( dbErr => {
        res.status(500).json(dbErr);
    })
})

router.post("/", (req, res) => {    
    actionFunctions.insert(req.body)
    .then( dbRes => {
        res.status(201).json(dbRes);
    })
    .catch( dbErr => {
        res.status(500).json(dbErr);
    })
})

router.put("/:id", (req, res) => {    
    actionFunctions.update(req.params.id, req.body)
    .then( dbRes => {
        res.status(202).json(dbRes);
    })
    .catch( dbErr => {
        res.status(500).json(dbErr);
    })
})

module.exports = router;