<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;

class createaccountRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'unique:users',
            'password' => [
                'required', 'string', 'confirmed',
                Password::min(6)
                ->letters()
                //->numbers()
                //->mixedCase()
                //->uncompromised()
            ],
            'password_confirmation'  => 'required'
        ];
    }

    public function failedValidation(Validator $validator)
    {
        // WHEN THE REQUEST IS FROM API
        if(Request::is('api/*') || Request::ajax('XMLHttpRequest'))
        {
            throw new HttpResponseException(response()->json([
             'success'   => false,
             'message'   => 'Validation errors',
             'errors'      => $validator->errors()
           ]));
        }

        throw new HttpResponseException(redirect()->back()->with([
            'success'   => false,
            'message'   => 'Validation errors',
            'errors'      => $validator->errors()
        ]));
    }
}
