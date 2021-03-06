require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", require("./routes/getDetails"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
