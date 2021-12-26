import mongoose from "mongoose";
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  createdAt: { type: Date },
  modifiedAt: { type: Date },
});

const StudentDocument = mongoose.model<Student>(
  "Student",
  StudentSchema,
  "Students"
);
export interface Student extends mongoose.Document {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  modifiedAt: Date;
}

export interface StudentViewModel {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const convert = (model: Student): StudentViewModel => {
  let vm: StudentViewModel = {
    ...JSON.parse(JSON.stringify(model)),
  };
  return vm;
};

export interface StudentRequestModel {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export const getStudents = async (): Promise<StudentViewModel[]> => {
  const students = await StudentDocument.find().exec();
  const vms: StudentViewModel[] = students.map((student) => convert(student));
  return vms;
};

export const save = async (payload: any): Promise<string> => {
  const newStudent = new StudentDocument({
    ...payload,
    id: new mongoose.Types.ObjectId(),
    createdAt: new Date(),
    modifiedAt: new Date(),
  });

  const saveStudent = await newStudent.save();
  return saveStudent.id;
};
