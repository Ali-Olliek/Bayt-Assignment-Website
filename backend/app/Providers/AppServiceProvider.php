<?php

namespace App\Providers;

use App\Http\Controllers\Admins\UsersController as AdminUsersController;
use App\Http\Controllers\Public\AuthenticationController as PublicAuth;
use App\Http\Controllers\Users\AuthenticationController as UsersAuth;
use App\Interfaces\IAuthenticatable;
use App\Interfaces\ICRUD;
use App\Services\AuthenticationService;
use App\Services\UsersService;
use Illuminate\Support\ServiceProvider;

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
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
