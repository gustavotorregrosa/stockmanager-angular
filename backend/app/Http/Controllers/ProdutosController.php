<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produto;
use Illuminate\Support\Facades\Validator;
use Exception;

class ProdutosController extends Controller
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
        $produtos = Produto::orderBy('nome')->get();
        return respostaCors($produtos, 200);
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

    public function salvar(Request $request){
        if(is_null($request->id)){
            return $this->store($request);
        }
        return $this->update($request);

        

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */



    public function geraNome($nomeatual)
    {
        $nomeSemExtensao = $nomeatual;
        $posicaoPonto = strpos($nomeatual, ".");
        $extensao = "";
        if ($posicaoPonto) {
            $nomeSemExtensao = substr($nomeatual, 0, $posicaoPonto);
            $extensao = substr($nomeatual, $posicaoPonto, strlen($nomeatual));
        }
        $nomeNovo = md5($nomeSemExtensao);
        $nomeNovo .= time();
        if ($posicaoPonto) {
            $nomeNovo .= $extensao;
        }
        return $nomeNovo;
    }

    public function salvarUnit($arq, $nomeOriginal)
    {
        $nome = $this->geraNome($nomeOriginal);
        $fp = fopen("imagens/".$nome, "w");
        $data = base64_decode($arq);
        fwrite($fp, $data);
        fclose($fp);
        return $nome;
    }


 

    public function store(Request $request)
    {
        $validacao = Validator::make($request->all(), [
            'nome' => 'required|unique:produtos'
        ]);

        if ($validacao->fails()) {
            return respostaCors([], 422, "Nome de produto invalido ou repetido");
        }

        $validacao = Validator::make($request->all(), [
            'categoria' => 'required',
        ]);

        if ($validacao->fails()) {
            return respostaCors([], 422, "Necessario selecionar CATEGORIA do produto");
        }


        $nomeImagemNovo = null;
        if($imagem = $request->input('imagem')){
            $nomeImagemOriginal = $request->input('nomeImagem');
            $nomeImagemNovo = $this->salvarUnit($imagem, $nomeImagemOriginal);
        }
        
        Produto::create([
            'nome' => $request->nome,
            'categoria' => $request->categoria,
            'descricao' => $request->descricao,
            'imagem' => $nomeImagemNovo

        ]);

        return respostaCors([], 200, "Produto " . $request->nome . " adicionado");
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
        
        $validacao = Validator::make($request->all(), [
            'categoria' => 'required',
        ]);

        if ($validacao->fails()) {
            return respostaCors([], 422, "Necessario selecionar CATEGORIA do produto");
        }

        $produto = Produto::findOrFail($request->id);

        if($produto->nome != $request->nome){
            $validacao = Validator::make($request->all(), [
                'nome' => 'required|unique:produtos',
            ]);
    
            if ($validacao->fails()) {
                return respostaCors([], 422, "Nome de produto invalido ou repetido");
            }

            $produto->nome = $request->nome;
        }

       
        $produto->descricao = $request->descricao;
        $produto->categoria = $request->categoria;

       
        if($imagem = $request->input('imagem')){
            $nomeAntigo = $produto->imagem;
            $nomeImagemOriginal = $request->input('nomeImagem');
            $nomeImagemNovo = $this->salvarUnit($imagem, $nomeImagemOriginal);
            $produto->imagem = $nomeImagemNovo;
            @unlink($_SERVER["DOCUMENT_ROOT"]."/imagens/".$nomeAntigo);
        }
        $produto->save();
    

        return respostaCors([], 200, "Produto " . $request->nome . " alterado");
    }

    public function getImagem($imagem){
        $img = file_get_contents($_SERVER["DOCUMENT_ROOT"]."/imagens/".$imagem);
        $img = base64_encode($img);
        return respostaCors([
            'imagem64' => $img
        ], 200);
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

            $produto = Produto::findOrFail($id);
            $nome = $produto->nome;
            if($imagem = $produto->imagem){
                @unlink($_SERVER["DOCUMENT_ROOT"]."/imagens/".$imagem);
            }

            $produto->delete();
            return respostaCors([], 200, "Produto " . $nome . " deletado ");

        } catch (Exception $e) {
            return respostaCors([], $e->getCode(), "Excecao: ".$e->getMessage());
            
        }
    }
}
