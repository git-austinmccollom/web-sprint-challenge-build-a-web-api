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

router.post("/", validateAction, (req, res) => {    
    actionFunctions.insert(req.body)
    .then( dbRes => {
        res.status(201).json(dbRes);
    })
    .catch( dbErr => {
        res.status(500).json(dbErr);
    })
})

router.put("/:id", validateAction, (req, res) => {    
    actionFunctions.update(req.params.id, req.body)
    .then( dbRes => {
        res.status(202).json(dbRes);
    })
    .catch( dbErr => {
        res.status(500).json(dbErr);
    })
})

router.delete("/:id", (req, res) => {    
    actionFunctions.remove(req.params.id)
    .then( dbRes => {
        res.status(202).json(dbRes);
    })
    .catch( dbErr => {
        res.status(500).json(dbErr);
    })
})

//middleware

function validateAction(req, res, next) {
    if (req.body.description && req.body.notes && req.body.project_id) {
      next();
    } else {
      res.status(400).json({ message: "missing description, notes, or project_id in body" });
    }
  }

module.exports = router;