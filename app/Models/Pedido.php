<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    protected $table = 'sp_order';

    public $timestamps = false;

    protected $primaryKey = 'order_id';

    protected $fillable = [
           
            'supply_name',
            'set_date',
            'order_type',            
            'prices',
            'installments',
    ];
}
