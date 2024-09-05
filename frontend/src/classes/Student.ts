import { Base } from './Base';

export class Student extends Base {
  public age: number;
  public name: string;
  public address: string;
  constructor(student: any) {
    super(student);
    this.age = student.age;
    this.name = student.name;
    this.address = student.address;
  }
}
