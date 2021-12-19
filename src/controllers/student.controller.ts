import { Request, Response } from "express";
import { IRoute } from "./routes";

export const routes: IRoute[] = [
  {
    http: "get",
    path: "/student-get",
    handler: (req: Request, res: Response) => {
      res.send("get student");
    },
  },
  {
    http: "post",
    path: "/student-post",
    handler: (req: Request, res: Response) => {
      res.send("post student");
    },
  },
];
