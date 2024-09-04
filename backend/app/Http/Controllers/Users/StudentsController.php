<?php

namespace App\Http\Controllers\Users;

use Exception;
use App\Interfaces\ICRUD;
use App\Http\Controllers\BaseController;

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

            return $students;
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to get students", 400, $exception);
        }
    }
}
