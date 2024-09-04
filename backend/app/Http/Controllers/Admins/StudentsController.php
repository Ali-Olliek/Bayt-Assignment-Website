<?php

namespace App\Http\Controllers\Admins;

use Exception;
use App\Interfaces\ICRUD;
use App\Http\Controllers\BaseController;
use App\Http\Requests\UsersRequests\UpdateUserRequest;
use App\Http\Requests\StudentsRequests\CreateStudentRequest;
use App\Http\Requests\StudentsRequests\UpdateStudentRequest;

class StudentsController extends BaseController
{
    private $studentsService;

    public function __construct(ICRUD $studentsService)
    {
        $this->studentsService = $studentsService;
    }

    public function index()
    {
        try {
            $students = $this->studentsService->index();

            return $this->SuccessResponse($students);
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to get students", 400, $exception);
        }
    }

    public function show(int $id)
    {
        try {
            $student = $this->studentsService->show($id);

            return $this->SuccessResponse($student);
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to get student", 400, $exception);
        }
    }

    public function store(CreateStudentRequest $createStudentRequest)
    {
        try {
            $student = $this->studentsService->create($createStudentRequest->validated());

            return $this->SuccessResponse($student, 201);
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to create student", 400, $exception);
        }
    }

    public function update(UpdateStudentRequest $updateUserRequest, int $id)
    {
        try {
            $student = $this->studentsService->update($updateUserRequest->validated(), $id);

            return $this->SuccessResponse($student, 201);
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to create student", 400, $exception);
        }
    }

    public function destroy(int $id)
    {
        try {
            $this->studentsService->delete($id);

            return $this->SuccessResponse(null, 201, "Student Deleted");
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to create student", 400, $exception);
        }
    }
}
