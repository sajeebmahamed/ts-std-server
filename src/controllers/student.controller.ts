import { Request, Response } from "express";
import { getStudents } from "../services/student.service";
import { IRoute } from "./routes";

const getHandler = async (req: Request, res: Response) => {
  const students = await getStudents();
  res.send(students);
};
const postHandler = (req: Request, res: Response) => {
  res.send("post student");
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
