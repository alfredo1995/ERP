<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProdutoVenda extends Model
{
    use HasFactory;

    protected $table = 'sp_product_sale';

    public $timestamps = false;

    protected $primaryKey = 'product_sale_id';

    protected $fillable = [
           
            'product_sale_name',
            'product_sale_unit',
            'product_sale_category',            
            'product_sale_ncm',
            'product_sale_obs',
            'product_sale_group' ,
            'product_sale_character',
            'product_sale_color',
            'product_sale_code',
            'product_sale_family',
    ];
}
