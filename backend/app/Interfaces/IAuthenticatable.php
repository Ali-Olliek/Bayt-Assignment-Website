<?php

namespace App\Interfaces;

interface IAuthenticatable
{
    public function signin(array $credentials, $params = null);

    public function signup(array $credentials, $params = null);

    public function signout();
}
