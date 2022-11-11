import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("Error:", console.log.bind(console, 'Connection error!'));
db.once("open", ()=> {
    console.log("Connection sucessfull")
});

const app = express();

app.use(express.json());

routes(app);

export default app;
