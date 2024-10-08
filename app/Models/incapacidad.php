<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class incapacidad extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = "incapacidad";
    protected $primaryKey = "idIncapacidad";

    protected $fillable = [
        'motivo',
        'numeroDias',
        'fechaInicio',
        'fechaFin',
        'idOperador',
    ];
}
