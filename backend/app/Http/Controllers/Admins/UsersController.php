<?php

namespace App\Http\Controllers\Admins;

use Exception;
use App\Interfaces\ICRUD;
use App\Http\Controllers\BaseController;
use App\Http\Requests\UsersRequests\UpdateUserRequest;

class UsersController extends BaseController
{
    private $usersService;

    public function __construct(ICRUD $usersService)
    {
        $this->usersService = $usersService;
    }

    public function update(UpdateUserRequest $updatedUserRequest, int $id)
    {
        try {
            $updatedUser = $this->usersService->update($updatedUserRequest->validated(), $id);

            return $this->SuccessResponse($updatedUser, 201);
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to update user", 400, $exception);
        }
    }

    public function index()
    {
        try {
            $users = $this->usersService->index();

            return $this->SuccessResponse($users);
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to get users", 400, $exception);
        }
    }
}
