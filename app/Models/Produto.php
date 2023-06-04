<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

    protected $table = 'sp_product';

    public $timestamps = false;

    protected $primaryKey = 'prod_id';

    protected $fillable = [
           
            'prod_name',
            'prod_category',
            'prod_unit',
            'prod_ncm',
            'prod_note',
    ];
}
