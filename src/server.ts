import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import router from "./controllers/routes";

const uri = "mongodb://localhost:27017/academy?retryWrites=true&w=majority";
const setupMongo = async () => {
  const options: mongoose.ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };
  try {
    await mongoose.connect(uri, options);
    console.log("mongodb connection successfull");
    mongoose.Promise = global.Promise;
  } catch (error) {
    console.log(error);
  }
};
const init = async (): Promise<void> => {
  let app = express();
  app.use(express.json());
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  app.use("/api", router);

  app.get("/", (req, res) => {
    res.send(`Other request:\n${req.method} at \n` + new Date());
  });

  await setupMongo();
  await app.listen(3000);

  console.log("listening to the port 3000");
};

init();
