const express = require("express");
const postFunctions = require("./projectModel");
const actionFunctions = require("./actionModel");
const router = express.Router();

router.get("/", (req, res) => {
  postFunctions
    .get()
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch((dbErr) => {
      res.status(500).json(dbErr);
    });
});

router.get("/:id", (req, res) => {
  postFunctions
    .get(req.params.id)
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch((dbErr) => {
      res.status(500).json(dbErr);
    });
});

router.get("/:id/actions", (req, res) => {
  postFunctions
    .getProjectActions(req.params.id)
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch((dbErr) => {
      res.status(500).json(dbErr);
    });
});

router.post("/", validateProject, (req, res) => {
  postFunctions
    .insert(req.body)
    .then((dbRes) => {
      res.status(201).json(dbRes);
    })
    .catch((dbErr) => {
      res.status(500).json(dbErr);
    });
});

router.put("/:id", validateProject, (req, res) => {
  postFunctions
    .update(req.params.id, req.body)
    .then((dbRes) => {
      res.status(201).json(dbRes);
    })
    .catch((dbErr) => {
      res.status(500).json(dbErr);
    });
});

router.delete("/:id", (req, res) => {
  postFunctions
    .remove(req.params.id)
    .then((dbRes) => {
      res.status(201).json(dbRes);
    })
    .catch((dbErr) => {
      res.status(500).json(dbErr);
    });
});

//middleware

function validateProject(req, res, next) {
  if (req.body.name && req.body.description) {
    next();
  } else {
    res.status(400).json({ message: "missing name or description in body" });
  }
}

module.exports = router;
