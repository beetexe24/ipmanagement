<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ipaddressRequest;
use App\Http\Services\ipService;

class ipController extends Controller
{
    protected function create(ipaddressRequest $request)
    {
        return (new ipService)->create($request);
    }

    protected function update()
    {

    }

    protected function fetch(Request $request)
    {
        return (new ipService)->fetch($request);
    }
}
