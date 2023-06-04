<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{

    public function index()
    {
        $produtos = Produto::all();

        return view('produto.index', compact('produtos'));
    }
   

    public function create()
    {
        $produtos = Produto::all();

        return view('produto.create', compact('produtos'));
    }

   
    public function store(Request $request)
    {
        $produto = Produto::create($request->all());

        return redirect()->route('produto.index');
    }
  

    public function show(Produto $produto)
    {
        //
    }

   /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Produto $produto
     * @return \Illuminate\Http\Response
     */
    public function edit(Produto $produto)
    {

        return view('produto.edit', compact('produto')); 
    }
   
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Produto $produto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Produto $produto)   
    {
        $produto->update($request->all());

        return redirect()->route('produto.index');
    }



    public function destroy(Produto $produto)
    {
        $produto->delete();

        return redirect()->route('produtos.index');
    }
}
