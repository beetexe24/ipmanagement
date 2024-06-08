<?php
namespace App\Http\Repository;

use App\Models\iplisthistories;
use DB;

class DBiplisthistories {

    public static function create($request, $update)
    {
        iplisthistories::create([
            "FK_history_id"     => $update->id,
            "label"             => $request->label,
            "FK_user_history"   => auth('sanctum')->user()->id
        ]);
    }

    public static function fetch($id)
    {
        $data = DB::table("iplisthistories as h")
        ->select("u.email", "h.label", "h.created_at")
        ->join("users as u", "h.FK_user_history", "=", "u.id")
        ->where("h.FK_history_id", $id)
        ->orderBy("h.id", "desc")
        ->get();

        return $data;
    }
}