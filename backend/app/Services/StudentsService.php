<?php

namespace App\Services;

use Exception;
use App\Models\Student;
use App\Interfaces\ICRUD;

class StudentsService extends BaseService implements ICRUD
{

    #region CRUDs
    public function index(?array $validatedData = null, $params = null)
    {
        $students = Student::query();

        return $students->get();
    }

    public function show(int $id, $params = null)
    {
        $student = Student::find($id);

        if (!$student) throw new Exception("Failed to find student");

        return $student;
    }

    public function create(array $validatedData, $params = null)
    {
        $newStudent = Student::create($validatedData);

        return $newStudent;
    }

    public function update(array $validatedData, int $id, $params = null)
    {
        $updatedStudent = Student::find($id);

        if (!$updatedStudent) throw new Exception("Failed to find student");

        $updatedStudent->update($validatedData);

        return $updatedStudent;
    }

    public function delete(
        int $id,
        $params = null
    ) {
        $student = Student::find($id);

        if (!$student) throw new Exception("Failed to find student");

        $student->delete();
    }
    #endregion
}
