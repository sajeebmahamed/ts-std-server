import expresss, { Application } from "express";
import router from "./controllers/routes";

const init = (): Application => {
  let app = expresss();
  app.use("/api", router);
  return app;
};

const app = init();
app.listen(3000, () => {
  console.log("listening");
});
