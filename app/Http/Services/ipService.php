<?php
namespace App\Http\Services;


use App\Models\iplists;


class ipService {

    public function create($request)
    {
        # NOTE: ONE LINER CODE ISN'T MOVED IN REPOSITORY AS IT WOULD BECOME REDUNDANT WHEN PLACED TO
        # REPOSITORY THEN CALLED HERE IN SERVICE
        iplists::create($request->toArray());

        return [
            "success"      => true,
            "message"      => "Successfully Added"
        ];
    }

    public function update($request)
    {

    }

    public function fetch($request)
    {
        # NOTE: ONE LINER CODE ISN'T MOVED IN REPOSITORY AS IT WOULD BECOME REDUNDANT WHEN PLACED TO
        # REPOSITORY THEN CALLED HERE IN SERVICE
        $data = iplists::orderBy("id", "desc")->paginate(2);

        return [
            "success"   => true,
            "data"      => $data
        ];
    }
}