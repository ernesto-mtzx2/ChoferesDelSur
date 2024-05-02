<?php

use Illuminate\Foundation\Application;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PrincipalController;

//Route::get('/', [PrincipalController::class, 'inicio'])->name('inicio');
//Route::get('/', [PrincipalController::class, 'formarUnidades'])->name('formarUnidades');
Route::controller(PrincipalController::class)->group(function () {
    Route::get('/', 'inicio')->name('principal.inicio');
    Route::get('/principal/formUnidades', 'formarUnidades')->name('principal.formarUni');
    Route::get('/principal/unidades', 'unidades')->name('principal.unidades');
    Route::get('/principal/sociosPrestadores', 'sociosPrestadores')->name('principal.sociosPrestadores');
    Route::get('/principal/operadores', 'operadores')->name('principal.operadores');

    Route::post('/principal/operadores', 'addOperador')->name('principal.addOperador');
    Route::put('/principal/operadores/{idOperador}/edit', 'actualizarOperador')->name('principal.actualizarOperador');
    Route::delete('/principal/operadores/{operadoresIds}', 'eliminarOperador')->name('principal.eliminarOperador');

    Route::post('/principal/unidades', 'addUnidad')->name('principal.addUnidad');
    Route::put('/principal/unidades/{idUnidad}/edit', 'actualizarUnidad')->name('principal.actualizarUnidad');
    Route::delete('/principal/unidades/{unidadesIds}', 'eliminarUnidad')->name('principal.eliminarUnidad');
    
    Route::post('/principal/sociosPrestadores', 'addDirectivo')->name('principal.addDirectivo');
    Route::put('/principal/sociosPrestadores/{idDirectivo}/edit', 'actualizarDirectivo')->name('principal.actualizarDirectivo');
    Route::delete('/principal/sociosPrestadores/{directivosIds}', 'eliminarDirectivo')->name('principal.eliminarDirectivo');

    Route::get('/principal/rutas', 'rutas')->name('principal.rutas');
    Route::post('/principal/rutas', 'addRuta')->name('principal.addRuta');
    Route::put('/principal/rutas/{idRuta}/edit', 'actualizarRuta')->name('principal.actualizarRuta');
    Route::delete('/principal/rutas/{rutasIds}', 'eliminarRuta')->name('principal.eliminarRuta');
});