import express from "express";
const app = express();
import cors from "cors";
app.use(cors());
const port = 5000;
import routes from "./routes.js";

app.use(express.json());


app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});