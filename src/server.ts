import expresss, { Application } from "express";
import { routes } from "./controllers/routes";

const init = (): Application => {
  let app = expresss();
  routes.forEach((route) => {
    (app as any)[route.http](route.path, route.handler);
  });
  return app;
};

const app = init();
app.listen(3000, () => {
  console.log("listening");
});
