<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Services\authService;

class authController extends Controller
{
    
    protected function login(Request $request)
    {
        return (new authService)->login($request);
    }

    protected function logout(Request $request)
    {
        return (new authService)->logout($request);
    }
}
