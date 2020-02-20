<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    protected $table = "categorias";
    protected $guarded = [];

    public function produtos(){
        return $this->hasMany('App\Models\Produto', 'categoria', 'id');
    }
} 
