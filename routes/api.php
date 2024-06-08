<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ipController;
use App\Http\Controllers\API\accountController;
use App\Http\Controllers\API\authController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get("/dashboard", [ipController::class, "fetch"])->name("fetchipaddress");
    Route::post("/update", [ipController::class, "update"])->name("updateipaddress");
    Route::post("/fetch-history", [ipController::class, "fetch_history"])->name("fetch_history");

    Route::post("/logout", [authController::class, "logout"])->name("logout");
});   

Route::post("/create-account", [accountController::class, "create"])->name("create_account");
Route::post("/authenticate", [authController::class, "login"])->name("login");



