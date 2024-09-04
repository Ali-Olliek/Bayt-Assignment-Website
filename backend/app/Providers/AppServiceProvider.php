<?php

namespace App\Providers;

use App\Http\Controllers\Public\AuthenticationController;
use App\Interfaces\IAuthenticatable;
use App\Services\AuthenticationService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->when(AuthenticationController::class)->needs(IAuthenticatable::class)->give(AuthenticationService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
