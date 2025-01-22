import express from "express";
import 'dotenv/config'
const app = express()
app.use(express.json())
const port = process.env.PORT
import route from "./routes/noteRouter.js";

app.use(route);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})