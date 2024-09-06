import './students-control.css';
import Popup from '../controls/Popup';
import { Student } from '../../classes/Student';
import { ControlsContext } from '../../context/ControlsContext';
import React, { useContext, useEffect, useState } from 'react';
import { removeStudentApi, updateStudentApi } from '../../apis/students.api';

interface IStudentControlsProps {
  student: Student;
}

function StudentControls({ student }: IStudentControlsProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedStudent, setUpdatedStudent] = useState<Student>(student);
  const { toggleUpdating } = useContext(ControlsContext);

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
    toggleUpdating(true);
  };

  const saveChanges = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateStudentApi(updatedStudent, updatedStudent.id);
    toggleUpdating(true);
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
      <Popup title='Update Student' open={isUpdating} setOpen={setIsUpdating}>
        <form className='update-student-form' onSubmit={saveChanges}>
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
