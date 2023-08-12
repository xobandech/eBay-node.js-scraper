const morgan = require('morgan')
const express = require("express")

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/", itemsRouter);

app.listen(3001, () => console.log("Listening on port 3001"));
