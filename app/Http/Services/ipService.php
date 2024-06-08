<?php
namespace App\Http\Services;

use App\Models\iplists;
use App\Models\iplisthistories;
use App\Http\Repository\DBiplists;
use App\Http\Repository\DBiplisthistories;

class ipService {

    public function create($request)
    {
        # NOTE: ONE LINER CODE ISN'T MOVED IN REPOSITORY AS IT WOULD BECOME REDUNDANT WHEN PLACED TO
        # REPOSITORY THEN CALLED HERE IN SERVICE
        $insert = iplists::create($request->toArray());
        DBiplisthistories::create($request, $insert);

        return [
            "success"      => true,
            "message"      => "Successfully Added"
        ];
    }

    public function update($request)
    {
        $update = DBiplists::update($request);
        DBiplisthistories::create($request, $update);
        

        return [
            "success"      => true,
            "message"      => "Successfully Updated"
        ];
    }

    public function fetch($request)
    {
        # NOTE: ONE LINER CODE ISN'T MOVED IN REPOSITORY AS IT WOULD BECOME REDUNDANT WHEN PLACED TO
        # REPOSITORY THEN CALLED HERE IN SERVICE
        $data = iplists::orderBy("id", "desc")->paginate(10);

        return [
            "success"   => true,
            "data"      => $data
        ];
    }

    public function fetch_history($request)
    {
        $data = DBiplisthistories::fetch($request->id);

        return array(
            "success"   => true,
            "data"      => $data
        );
    }
}