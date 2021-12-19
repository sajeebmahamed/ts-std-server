export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface StudentViewModel {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface StudentRequestModel {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export const getStudents = async (): Promise<StudentViewModel[]> => {
  return [
    {
      id: "1",
      name: "Sajeeb",
      email: "sajeeb@mail.com",
      phone: "1",
    },
  ];
};
