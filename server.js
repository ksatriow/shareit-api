const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("I am ready to lisen you");
});
