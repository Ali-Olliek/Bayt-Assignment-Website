<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Public\AuthenticationController as PublicAuth;
use App\Http\Controllers\Users\AuthenticationController as UserAuth;

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
Route::prefix("users")->group(function () {
    Route::post("sign-out", [UserAuth::class, "signout"]);
});
#endregion

#region Admins
Route::prefix("admins")->group(function () {});
#endregion