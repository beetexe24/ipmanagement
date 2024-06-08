<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Services\accountService;
use App\Http\Requests\createaccountRequest;
use App\Http\Requests\authenticationRequest;

class accountController extends Controller
{
    
    protected function create(createaccountRequest $request)
    {
        return (new accountService)->create($request);
    }

}
