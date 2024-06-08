<?php
namespace App\Http\Services;


use App\Models\iplists;
use App\Models\iplisthistories;


class ipService {

    public function create($request)
    {
        # NOTE: ONE LINER CODE ISN'T MOVED IN REPOSITORY AS IT WOULD BECOME REDUNDANT WHEN PLACED TO
        # REPOSITORY THEN CALLED HERE IN SERVICE
        $insert = iplists::create($request->toArray());

        
        iplisthistories::create([
            "FK_history_id" => $insert->id,
            "label"         => $request->label
        ]);

        return [
            "success"      => true,
            "message"      => "Successfully Added"
        ];
    }

    public function update($request)
    {
        //iplists::where("ipaddress", $request->ipaddress)->update(["label" => $request->label]);
        $update = iplists::where("ipaddress", $request->ipaddress)->first();
        $update->update(["label" => $request->label]);

        iplisthistories::create([
            "FK_history_id" => $update->id,
            "label"         => $request->label
        ]);

        return [
            "success"      => true,
            "message"      => "Successfully Updated"
        ];
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

    public function fetch_history($request)
    {
        $data = iplisthistories::where("FK_history_id", $request->id)->orderBy("id", "desc")->get();

        return array(
            "success"   => true,
            "data"      => $data
        );
    }
}