<?php

namespace App\Services;

use Exception;
use App\Models\User;
use App\Interfaces\IAuthenticatable;
use Illuminate\Support\Facades\DB;

class AuthenticationService extends BaseService implements IAuthenticatable
{
    public function signin(array $credentials, $params = null)
    {

        if (!$token = auth("api")->attempt($credentials)) {
            throw new Exception("Invalid Credentials");
        }

        $user = auth()->user();

        $user["token"] = $token;

        return $user;
    }

    public function signup(array $credentials, $params = null)
    {
        $newUser = User::create($credentials);

        if (!$newUser) throw new Exception("Failed to sign up");

        $token = auth()->attempt([
            "email" => $credentials["email"],
            "password" => $credentials["password"]
        ]);

        $newUser["token"] = $token;

        return $newUser;
    }

    public function signout()
    {
        auth()->logout();
    }
}
