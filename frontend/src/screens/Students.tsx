import { useEffect, useState } from 'react';
import { Student } from '../classes/Student';
import { useRole } from '../hooks/useRoles';
import Popup from '../components/controls/Popup';
import { createStudentApi, getStudentsApi } from '../apis/students.api';
import StudentControls from '../components/students/StudentControls';

const HEADERS = ['', 'Name', 'Age', 'Address', 'Action'];

function Students() {
  const { isAdmin } = useRole();
  const [students, setStudents] = useState<Student[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newStudent, setNewStudent] = useState<Student>(
    new Student({ name: '', age: 0, address: '' })
  );

  const fetchStudents = async () => {
    const students = await getStudentsApi('/users/students');

    setStudents(students);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAddStudent = async (e: any) => {
    e.preventDefault();
    const student = await createStudentApi(newStudent);

    if (!student) return;

    setStudents([...students, student]);
    setIsAdding(false);
  };

  const handleChange = (e: any) => {
    e.preventDefault();

    const { name, value } = e.target;

    setNewStudent((prevStudent: any) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  return (
    <>
      <h1 className='page-title'>Students</h1>
      <div className='students-container'>
        <div className='table-header'>
          {isAdmin && (
            <>
              <button onClick={() => setIsAdding(true)}>add student</button>
              {isAdding && (
                <Popup
                  title='Add Student'
                  open={isAdding}
                  setOpen={setIsAdding}
                >
                  <form className='add-user-form' onSubmit={handleAddStudent}>
                    <label>
                      Name
                      <input
                        onChange={handleChange}
                        name='name'
                        value={newStudent?.name}
                      />
                    </label>
                    <label>
                      Age
                      <input
                        onChange={handleChange}
                        type='number'
                        name='age'
                        value={newStudent?.age}
                      />
                    </label>
                    <label>
                      Address
                      <input
                        onChange={handleChange}
                        name='address'
                        value={newStudent?.address}
                      />
                    </label>
                    <button type='submit'>save</button>
                  </form>
                </Popup>
              )}
            </>
          )}
        </div>
        <div className='students-table'>
          <table>
            <thead>
              <tr>
                {HEADERS.map((header) => {
                  if (!isAdmin && header == 'Action') return;
                  return <th key={header}>{header}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {students?.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td style={{ textAlign: 'left' }}>{student.name}</td>
                  <td>{student.age}</td>
                  <td style={{ textAlign: 'left' }}>{student.address}</td>
                  {isAdmin && (
                    <td>
                      <StudentControls student={student} />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Students;
