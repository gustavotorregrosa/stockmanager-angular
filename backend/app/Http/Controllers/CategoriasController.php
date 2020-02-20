<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoriasController extends Controller
{

    public function __construct()
    {
        $this->middleware('jwt');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categorias = Categoria::orderBy('nome')->get();
        return respostaCors($categorias, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validacao = Validator::make($request->all(), [
            'nome' => 'required|unique:categorias',
        ]);

        if ($validacao->fails()) {
            return respostaCors([], 422, "Nome de categoria invalido ou repetido");
        }

        Categoria::create([
            'nome' => $request->nome
        ]);

        return respostaCors([], 200, "Categoria " . $request->nome . " adicionada");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        try {
            $id = $request->id;
            $novoNome = $request->nome;
            $categoria = Categoria::findOrFail($id);
            $nomeAntigo = $categoria->nome;
            if ($novoNome == $nomeAntigo) {
                return respostaCors([], 202, "Nao houve mudanca no nome da categoria");
            }

            $validacao = Validator::make($request->all(), [
                'nome' => 'required|unique:categorias',
            ]);

            if ($validacao->fails()) {
                return respostaCors([], 422, "Nome de categoria invalido ou repetido");
            }

            $categoria->nome = $novoNome;
            $categoria->save();
            return respostaCors([], 200, "Categoria " . $nomeAntigo . " alterada para ".$novoNome);

        } catch (Exception $e) {
            return respostaCors([], $e->getCode(), "Excecao: ".$e->getMessage());
            
        }




     
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        try {

            $categoria = Categoria::findOrFail($id);
            $nome = $categoria->nome;

            if($categoria->produtos->count()){
                return respostaCors([], 406, "Delete os produtos na categoria " . $nome . " primeiro ");
            }
        

            $categoria->delete();
            return respostaCors([], 200, "Categoria " . $nome . " deletada ");

        } catch (Exception $e) {
            return respostaCors([], $e->getCode(), "Excecao: ".$e->getMessage());
            
        }
    }
}
