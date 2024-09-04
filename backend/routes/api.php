<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Users\AuthenticationController as UserAuth;
use App\Http\Controllers\Public\AuthenticationController as PublicAuth;
use App\Http\Controllers\Admins\UsersController as AdminUsersController;
use App\Http\Controllers\Users\StudentsController as UsersStudentsController;
use App\Http\Controllers\Admins\StudentsController as AdminStudentsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

#region Public
Route::prefix("public")->group(function () {
    Route::post("sign-in", [PublicAuth::class, "signin"]);
    Route::post("sign-up", [PublicAuth::class, "signup"]);
});
#endregion

#region Users
Route::prefix("users")->middleware("isLoggedIn")->group(function () {
    Route::post("sign-out", [UserAuth::class, "signout"]);
    Route::get("students", [UsersStudentsController::class, "index"]);
});
#endregion

#region Admins
Route::prefix("admins")->middleware("isAdmin")->group(function () {
    #region Users 
    Route::get("users", [AdminUsersController::class, "index"]);
    Route::put("users/{id}", [AdminUsersController::class, "update"]);
    #endregion

    #region Students
    Route::apiResource("students", AdminStudentsController::class);
    #endregion
});
#endregion