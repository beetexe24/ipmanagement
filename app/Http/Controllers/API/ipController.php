<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Services\ipService;

class ipController extends Controller
{
    protected function create()
    {
        return (new ipService)->create();
    }

    protected function update()
    {

    }

    protected function fetch(Request $request)
    {
        return (new ipService)->fetch($request);
    }
}
