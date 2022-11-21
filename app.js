const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

let dateAfterHundredDays = addDays(new Date(), 100);

const result = `${dateAfterHundredDays.getDate()}/${
  dateAfterHundredDays.getMonth() + 1
}/${dateAfterHundredDays.getFullYear()}`;

app.get("/", (request, response) => {
  response.send(result);
});

app.listen(3000);
module.exports = app;
