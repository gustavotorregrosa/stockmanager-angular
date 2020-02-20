<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\CanResetPassword as ICanResetPassword;
use Illuminate\Auth\Passwords\CanResetPassword;

class User extends Authenticatable implements ICanResetPassword
{
    use Notifiable;
    use CanResetPassword;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'perfil_sistemico'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function perfilSistemico(){     
        return $this->belongsTo('App\Models\PerfilSistemico', 'perfil_sistemico');
    }

    public function populaPerfil($prf){
        $this->perfil = $prf;
    }

}
