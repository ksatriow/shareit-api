const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/userRoute");
const postsRoutes = require("./routes/postRoute");

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
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);
// app.get("/", (req, res) => {
//   res.send("Here is Shareit API docs");
// });

app.listen(3000, () => {
  console.log("ShareIt API Ready");
});
