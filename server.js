const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/userRoute");

app.use(bodyParser.json());

// Swagger 
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: "shareit",
      description: "ShareIt API Documentation",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:3000/"],
    },
  }),
  apis: ["server.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/shareit-api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/users", usersRoutes);

app.listen(3000, () => {
  console.log("I am ready to lisen you");
});
