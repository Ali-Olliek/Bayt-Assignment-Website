<?php

namespace App\Services;

use Exception;
use App\Models\User;
use App\Interfaces\IAuthenticatable;

class AuthenticationService implements IAuthenticatable
{
    public function signin(array $credentials, $params = null)
    {
        if (!$token = auth()->attempt($credentials)) {
            throw new Exception("Invalid Credentials");
        }

        return $token;
    }

    public function signup(array $credentials, $params = null)
    {
        $newUser = User::create($credentials);

        if (!$newUser) throw new Exception("Failed to sign up");

        $token = auth()->attempt($credentials["email"], $credentials["password"]);

        return $token;
    }

    public function signout()
    {
        auth()->logout();
    }
}
