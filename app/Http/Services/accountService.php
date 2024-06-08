<?php
namespace App\Http\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class accountService {

    public function create($request)
    {
        $success = false;
        $account_check = User::where("email", $request->email)->first();
        $message = 'Account already exists.';
        if(empty($account_check))
        {
            // CREATE ACCOUNT AND SAVE GENERATED USER AND PASSWORD

            User::create([
                "name"      => $request->name,
                "email"     => $request->email,
                "password"  => Hash::make($request->password)
            ]);

            $success = true;
            $message = "Successfully created";
        }

        return array(
            "success"   => $success,
            "message"   => $message
        );
    }
}