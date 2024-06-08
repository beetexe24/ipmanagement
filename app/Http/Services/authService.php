<?php
namespace App\Http\Services;

use App\Models\User;
use Auth;

class authService {

    public function login($request)
    {
        if(
            Auth::attempt([
                "email"     => $request->email,
                "password"  => $request->password
            ])
        )
        {
            $user = User::where("email", $request->email)->first();

            return response()->json([
                'success'   => true,
                'message'   => 'Successfully authenticated',
                'token'     => $user->createToken('API TOKEN')->plainTextToken,
                'type'      => $user->type,
                'email'     => $user->email,
                'name'      => $user->name
            ]);
        }
        else
        {
            return response()->json([
                "success"   => false,
                "message"   => "Email or Password is invalid"
            ]);
        }
    }

    public function logout($request)
    {
        $request->user()->tokens()->where('id', auth()->id())->delete();
        return response([
            'success' => true,
            'message' => 'Successfully logged out'
        ]);
    }
}