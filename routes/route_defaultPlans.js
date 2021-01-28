const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller_defaultPlans");
const { validationResult, body, param } = require("express-validator");

router.post(
  "/",
  [
    body("maxAge").isNumeric().notEmpty().escape(),
    body("exercises").notEmpty().isArray(),
  ],
  function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      controller.create(req, res);
    } else {
      res.status(404).json({ errors: errors.array() });
    }
  }
);

router.get(
  "/getdefault/:maxAge",
  [param("maxAge").notEmpty().escape()],
  function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      controller.getPlanByAge(req, res);
    } else {
      res.status(404).json({ errors: errors.array() });
    }
  }
);

module.exports = router;
