<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PedidoVenda extends Model
{
    use HasFactory;

    protected $table = 'sp_order_sale';

    public $timestamps = false;

    protected $primaryKey = 'product_order_id';

    protected $fillable = [
           
            'product_order_value_total',
            'product_order_installments',
    ];
}
