<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// definindo quais atributos do Model vão ser atribuidos em massa. banco.php    =    view ( fornecedores/create.blade)

class Banco extends Model
{
    use HasFactory;

    protected $table = 'sp_supp_bank';

    public $timestamps = false;

    protected $fillable = [

        's_b_id', 
        'bbank',
        'agency', 
        'digit', 
        'amount',
        'digit_amount', 
        'type', 
        'sup_id', 
        'type_acc', 
        'b_favorecido',
        'b_cpf',    
        
    ];

}    
