<?php

use Illuminate\Support\Facades\Route;

use App\http\Controllers\ProdutoController;
use App\http\Controllers\FornecedorController;
use App\http\Controllers\ProdutoVendaController;
use App\http\Controllers\PedidoController;
use App\http\Controllers\PedidoVendaController;


//controllers p/ manipulamos a lógica de tratamento das requisições recebendo os dados do model e transmitindo-os p/ view

Route::get('/', function () {
    return view('index');
});


//Registrando as Rotas e os Verbos HTTP Padrões dos Endpoints 

Route::resource('/fornecedor', FornecedorController::class);
Route::resource('/pedidoVenda', PedidoVendaController::class);
Route::resource('/pedido', PedidoController::class);
Route::resource('/produto', ProdutoController::class);
Route::resource('/produtoVenda', ProdutoVendaController::class);





























//Registrando as Rotas Fornecedores e os Verbos HTTP dos Endpoints manualmente

//Route::get('/fornecedores', 'App\Http\Controllers\FornecedorController@index')->name('fornecedor');
//Route::get('/fornecedores/create', 'App\Http\Controllers\FornecedorController@create')->name('fornecedorCreate');
//Route::post('/fornecedores/store', 'App\Http\Controllers\FornecedorController@store')->name('fornecedorStore');
//Route::get('/fornecedores/edit', 'App\Http\Controllers\FornecedorController@edit')->name('fornecedorEdit');
//Route::put('/fornecedores/update', 'App\Http\Controllers\FornecedorController@update')->name('fornecedorUpdate');
//Route::delete('/fornecedores/destroy', 'App\Http\Controllers\FornecedorController@destroy')->name('fornecedorDestroy');

