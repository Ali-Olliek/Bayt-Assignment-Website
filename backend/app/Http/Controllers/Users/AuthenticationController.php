<?php

namespace App\Http\Controllers\Users;

use Exception;
use App\Interfaces\IAuthenticatable;
use App\Http\Controllers\BaseController;

class AuthenticationController extends BaseController
{
    private $authenticationService;
    public function __construct(IAuthenticatable $authenticationService)
    {
        $this->authenticationService = $authenticationService;
    }

    public function signout()
    {
        try {
            $this->authenticationService->signout();
            return $this->SuccessResponse();
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to sign out", 401, $exception);
        }
    }
}
