<?php

namespace App\Http\Controllers;

use App\Models\PedidoVenda;
use Illuminate\Http\Request;

class PedidoVendaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pedidosVenda = PedidoVenda::all();

        return view('pedidoVenda.index', compact('pedidosVenda'));
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PedidoVenda  $pedidoVenda
     * @return \Illuminate\Http\Response
     */
    public function show(PedidoVenda $pedidoVenda)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PedidoVenda  $pedidoVenda
     * @return \Illuminate\Http\Response
     */
    public function edit(PedidoVenda $pedidoVenda)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PedidoVenda  $pedidoVenda
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PedidoVenda $pedidoVenda)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PedidoVenda  $pedidoVenda
     * @return \Illuminate\Http\Response
     */
    public function destroy(PedidoVenda $pedidoVenda)
    {
        //
    }
}
