<?php
namespace App\Http\Services;


use App\Models\iplists;


class ipService {

    public function create($request)
    {
        return "Success";
    }

    public function update($request)
    {

    }

    public function fetch($request)
    {
        $data = iplists::paginate(2);

        return [
            "success"   => true,
            "data"      => $data
        ];
    }
}