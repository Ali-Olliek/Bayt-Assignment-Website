<?php

namespace App\Services;

use App\Interfaces\ICRUD;

class StudentsService extends BaseService implements ICRUD
{

    #region Admin Functions
    public function index(?array $validatedData = null, $params = null) {}

    public function show(int $id, $params = null) {}

    public function create(array $validatedData, $params = null) {}

    public function update(array $validatedData, int $id, $params = null) {}

    public function delete(int $id, $params = null) {}
    #endregion
}
