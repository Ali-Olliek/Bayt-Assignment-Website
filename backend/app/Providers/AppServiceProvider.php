<?php

namespace App\Providers;

use App\Interfaces\ICRUD;
use App\Services\UsersService;
use App\Services\StudentsService;
use App\Interfaces\IAuthenticatable;
use App\Services\AuthenticationService;
use Illuminate\Support\ServiceProvider;
use App\Http\Controllers\Users\StudentsController as UsersStudentsController;
use App\Http\Controllers\Admins\StudentsController as AdminStudentsController;
use App\Http\Controllers\Admins\UsersController as AdminUsersController;
use App\Http\Controllers\Public\AuthenticationController as PublicAuth;
use App\Http\Controllers\Users\AuthenticationController as UsersAuth;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->when(PublicAuth::class)->needs(IAuthenticatable::class)->give(AuthenticationService::class);
        $this->app->when(UsersAuth::class)->needs(IAuthenticatable::class)->give(AuthenticationService::class);
        $this->app->when(AdminUsersController::class)->needs(ICRUD::class)->give(UsersService::class);
        $this->app->when(AdminStudentsController::class)->needs(ICRUD::class)->give(StudentsService::class);
        $this->app->when(UsersStudentsController::class)->needs(ICRUD::class)->give(StudentsService::class);
    }   

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
