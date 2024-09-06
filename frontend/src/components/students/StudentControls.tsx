import './students-control.css';
import Popup from '../controls/Popup';
import { Student } from '../../classes/Student';
import React, { useEffect, useState } from 'react';
import { removeStudentApi, updateStudentApi } from '../../apis/students.api';

interface IStudentControlsProps {
  student: Student;
}

function StudentControls({ student }: IStudentControlsProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedStudent, setUpdatedStudent] = useState<Student>(student);

  useEffect(() => {
    setUpdatedStudent(student);
    return () => {
      setUpdatedStudent(new Student({}));
    };
  }, [student, isUpdating]);

  const handleUpdate = (e: any) => {
    e.preventDefault();
    setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
  };

  const handleDelete = async () => {
    await removeStudentApi(student.id);
  };

  const saveChanges = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateStudentApi(updatedStudent, updatedStudent.id);
    setIsUpdating(false);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <button
          className='student-action update'
          onClick={() => setIsUpdating(true)}
        >
          update
        </button>
        <button className='student-action del' onClick={handleDelete}>
          delete
        </button>
      </div>
      <Popup open={isUpdating} setOpen={setIsUpdating}>
        <form onSubmit={saveChanges}>
          <label>
            Name
            <input
              onChange={handleUpdate}
              name='name'
              value={updatedStudent.name}
            />
          </label>
          <label>
            Age
            <input
              onChange={handleUpdate}
              type='number'
              name='age'
              value={updatedStudent.age}
            />
          </label>
          <label>
            Address
            <input
              onChange={handleUpdate}
              name='address'
              value={updatedStudent.address}
            />
          </label>
          <button type='submit'>save</button>
        </form>
      </Popup>
    </>
  );
}

export default StudentControls;
