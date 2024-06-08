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

    protected function update(Request $request)
    {
        return (new ipService)->update($request);
    }

    protected function fetch(Request $request)
    {
        return (new ipService)->fetch($request);
    }

    protected function fetch_history(Request $request)
    {
        return (new ipService)->fetch_history($request);
    }
}
