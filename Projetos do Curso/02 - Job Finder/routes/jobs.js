const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/test", (request, response) => {
  response.send("Deu certo");
});

router.get("/add", (request, response) => {
  response.render("add");
});

// add job via post
router.post("/add", (request, response) => {
  let { title, salary, company, description, email, new_job } = request.body;

  // insert
  Job.create({
    title,
    description,
    salary,
    company,
    email,
    new_job,
  })
    .then(() => response.redirect("/"))
    .catch((error) => console.log(error));
});

module.exports = router;
