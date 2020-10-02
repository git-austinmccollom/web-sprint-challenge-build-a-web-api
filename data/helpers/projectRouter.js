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

router.get("/:id/actions", (req, res) => {
    postFunctions.getProjectActions(req.params.id)
    .then( dbRes => {
        res.status(200).json(dbRes);
    })
    .catch( dbErr => {
        res.status(500).json(dbErr);
    })
})

router.post("/", (req, res) => {
    postFunctions.insert(req.body)
    .then( dbRes => {
        res.status(201).json(dbRes);
    })
    .catch( dbErr => {
        res.status(500).json(dbErr);
    })
})

router.put("/:id", (req, res) => {
    postFunctions.update(req.params.id, req.body)
    .then( dbRes => {
        res.status(201).json(dbRes);
    })
    .catch( dbErr => {
        res.status(500).json(dbErr);
    })
})

router.delete("/:id", (req, res) => {
    postFunctions.remove(req.params.id)
    .then( dbRes => {
        res.status(201).json(dbRes);
    })
    .catch( dbErr => {
        res.status(500).json(dbErr);
    })
})

module.exports = router;