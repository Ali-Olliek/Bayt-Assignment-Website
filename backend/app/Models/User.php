<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    #region Config
    protected $fillable = [
        'email',
        'username',
        'password',
        'is_admin'
    ];

    protected $hidden = [
        'password',
    ];

    protected $casts = [
        'password' => 'hashed',
        'is_admin' => 'boolean'
    ];

    #region Attributes
    protected function setPasswordAttribute($password)
    {
        if ($password) $this->attributes['password'] = Hash::make($password);
    }
    #endregion

    #region JWT Config
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [
            "name" => $this->attributes["username"],
            "is_admin" => $this->attributes["is_admin"],
            "email" => $this->attributes["email"]
        ];
    }
    #endregion
}
