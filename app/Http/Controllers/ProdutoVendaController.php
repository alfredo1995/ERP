<?php

namespace App\Http\Controllers;

use App\Models\ProdutoVenda;
use Illuminate\Http\Request;

class ProdutoVendaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $produtosVenda = ProdutoVenda::all();

        return view ('produtoVenda.index', compact('produtosVenda'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $produtosVenda = ProdutoVenda::all();

        return view ('produtoVenda.create', compact('produtosVenda'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    //    dd($request->all());
      
        $produtosVenda = ProdutoVenda::create($request->all());

        return redirect()->route('produtoVenda.index');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProdutoVenda  $produtoVenda
     * @return \Illuminate\Http\Response
     */
    public function show(ProdutoVenda $produtoVenda)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProdutoVenda  $produtoVenda
     * @return \Illuminate\Http\Response
     */
    public function edit(ProdutoVenda $produtoVenda)
    {
        return view ('produtoVenda.edit', compact ('produtoVenda'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProdutoVenda  $produtoVenda
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProdutoVenda $produtoVenda)
    {
        $produtoVenda->update($request->all());

        return redirect()->route('produtoVenda.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProdutoVenda  $produtoVenda
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProdutoVenda $produtoVenda)
    {
        //
    }
}
