import express, { Request, Response, Router } from "express";
import { routes as studentRoutes } from "./student.controller";
export type Handler = (req: Request, res: Response) => void;
export interface IRoute {
  http: string;
  path: string;
  handler: Handler;
}

export const routes: IRoute[] = [
  {
    http: "get",
    path: "/",
    handler: (req: Request, res: Response) => {
      res.send(`Req Method is ${req.method}`);
    },
  },
  {
    http: "post",
    path: "/",
    handler: (req: Request, res: Response) => {
      res.send(`Req Method is ${req.method}`);
    },
  },
  ...studentRoutes,
];

let router: Router = express.Router();

routes.forEach((route) => {
  (router as any)[route.http](route.path, route.handler);
});

export default router;
