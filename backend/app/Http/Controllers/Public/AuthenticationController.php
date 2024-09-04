<?php

namespace App\Http\Controllers\Public;

use Exception;
use App\Interfaces\IAuthenticatable;
use App\Http\Controllers\BaseController;
use App\Http\Requests\AuthenticationRequests\SignInRequest;
use App\Http\Requests\AuthenticationRequests\SignUpRequest;

class AuthenticationController extends BaseController
{

    private $authenticationService;

    public function __construct(IAuthenticatable $authenticationService)
    {
        $this->authenticationService = $authenticationService;
    }

    public function signin(SignInRequest $signInRequest)
    {
        try {
            $token = $this->authenticationService->signin($signInRequest->validated());
            return $this->SuccessResponse($token);
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to sign in", 401, $exception);
        }
    }

    public function signup(SignUpRequest $signUpRequest)
    {
        try {
            $token = $this->authenticationService->signup($signUpRequest->validated());
            return $this->SuccessResponse($token);
        } catch (Exception $exception) {
            return $this->FailureResponse("Failed to sign up", 401, $exception);
        }
    }
}
