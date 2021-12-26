import { Request, Response } from "express";
import * as service from "../services/student.service";
import { IRoute } from "./routes";

const getHandler = async (req: Request, res: Response) => {
  const students = await service.getStudents();
  res.send(students);
};
const postHandler = async (req: Request, res: Response) => {
  let saveId = await service.save(req.body);
  res.send(`student\n${saveId} \n`);
};
export const routes: IRoute[] = [
  {
    http: "get",
    path: "/student",
    handler: getHandler,
  },
  {
    http: "post",
    path: "/student",
    handler: postHandler,
  },
];
