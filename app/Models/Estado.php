<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// definindo quais atributos do Model vão ser atribuidos em massa. estado.php    =    view ( fornecedores/create.blade)

class Estado extends Model
{
    use HasFactory;

    protected $table = 'sp_states';

    public $timestamps = false;
    
    protected $fillable = [
        'st_id',
        'st_name', 
        'st_code',
    ];    
    
}
