<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CriarVariasCategorias extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $categorias = [
            'Ciclismo',
            'Culinaria',
            'Artes',
            'Beleza',
            'Cosmeticos',
            'Eletronicos'
        ];
        foreach($categorias as $c){
            \App\Models\Categoria::create([
                'nome' => $c
            ]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
