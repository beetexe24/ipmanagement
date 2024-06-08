<?php
namespace App\Http\Repository;

use App\Models\iplists;
use App\Models\iplisthistories;

class DBiplists {

    public static function update($request)
    {
        $update = iplists::where("ipaddress", $request->ipaddress)->first();
        $update->update(["label" => $request->label]);

        return $update;
    }
}