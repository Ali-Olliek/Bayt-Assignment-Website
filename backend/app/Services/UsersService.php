<?php

namespace App\Services;

use App\Interfaces\ICRUD;
use App\Models\User;
use Exception;

class UsersService extends BaseService implements ICRUD
{
    public function index(?array $validatedData = null, $params = null)
    {
        $users = User::all();

        return $users;
    }

    public function update(array $validatedData, int $id, $params = null)
    {
        $user = User::find($id);

        if (!$user) throw new Exception("User not found");

        $user->update($validatedData);

        return $user;
    }

    public function show(int $id, $params = null) {}

    public function create(array $validatedData, $params = null) {}

    public function delete(int $id, $params = null) {}
}
