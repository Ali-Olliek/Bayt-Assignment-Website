import { Student } from '../classes/Student';
import { authenticatedApi } from '../config/api';

interface ICreateStudent {
  name: string;
  age: number;
  address: string;
}

const index = async () => {
  try {
    const { data } = await authenticatedApi.get('/admin/students');

    const students = data.data.map((student: any) => new Student(student));

    return students;
  } catch (error) {
    throw error;
  }
};

const show = async (id: number) => {
  try {
    const { data } = await authenticatedApi.get(`/admin/students/${id}`);

    const student = new Student(data.data);
    return data;
  } catch (error) {
    throw error;
  }
};

const create = async (studentInfo: ICreateStudent) => {
  try {
    const { data } = await authenticatedApi.post(
      '/admin/students',
      studentInfo
    );

    const student = new Student(data.data);

    return student;
  } catch (error) {
    throw error;
  }
};

const update = async (studentInfo: Partial<ICreateStudent>, id: number) => {
  try {
    const { data } = await authenticatedApi.put(
      `/admin/students/${id}`,
      studentInfo
    );

    const student = new Student(data.data);

    return student;
  } catch (error) {
    throw error;
  }
};

const remove = async (id: number) => {
  try {
    await authenticatedApi.delete(`/admin/students/${id}`);
  } catch (error) {
    throw error;
  }
};

export {
  index as getStudentsApi,
  create as createStudentApi,
  show as getStudentApi,
  update as updateStudentApi,
  remove as removeStudentApi,
};
