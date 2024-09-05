import React, { useEffect, useState } from 'react';
import { Student } from '../classes/Student';
import { createStudentApi, getStudentsApi } from '../apis/students.api';
import StudentControls from '../components/students/StudentControls';
import { useRole } from '../hooks/useRoles';
import Popup from '../components/controls/Popup';

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
    <div>
      <div>
        {isAdmin && (
          <>
            <button onClick={() => setIsAdding(true)}>add student</button>
            {isAdding && (
              <Popup open={isAdding} setOpen={setIsAdding}>
                <form onSubmit={handleAddStudent}>
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
        {students?.map((student, index) => (
          <div className='student-card' key={student.id}>
            <p>{student.id}</p>
            <p>{student.name}</p>
            <p>{student.age}</p>
            <p>{student.address}</p>
            {isAdmin && <StudentControls student={student} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;
