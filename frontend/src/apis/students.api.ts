import { Student } from '../classes/Student';
import { authenticatedApi } from '../config/api';

interface ICreateStudent {
  name: string;
  age: number;
  address: string;
}

const index = async (uri: string) => {
  try {
    const { data } = await authenticatedApi.get(uri);

    const students = data.map((student: any) => new Student(student));
    return students;
  } catch (error) {}
};

const show = async (id: number) => {
  try {
    const { data } = await authenticatedApi.get(`/admins/students/${id}`);

    const student = new Student(data);
    return student;
  } catch (error) {}
};

const create = async (studentInfo: ICreateStudent) => {
  try {
    const { data } = await authenticatedApi.post(
      '/admins/students',
      studentInfo
    );

    const student = new Student(data);

    return student;
  } catch (error) {}
};

const update = async (studentInfo: Partial<ICreateStudent>, id: number) => {
  try {
    const { data } = await authenticatedApi.put(
      `/admins/students/${id}`,
      studentInfo
    );

    const student = new Student(data);

    return student;
  } catch (error) {}
};

const remove = async (id: number) => {
  try {
    await authenticatedApi.delete(`/admins/students/${id}`);
  } catch (error) {}
};

export {
  index as getStudentsApi,
  create as createStudentApi,
  show as getStudentApi,
  update as updateStudentApi,
  remove as removeStudentApi,
};
