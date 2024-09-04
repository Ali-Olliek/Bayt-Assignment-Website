<?php

namespace App\Http\Requests\StudentsRequests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateStudentRequest extends FormRequest
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
            "name" => [
                "sometimes",
                "string"
            ],
            "age" => [
                "sometimes",
                "integer"
            ],
            "address" => [
                "sometimes",
                "string"
            ]
        ];
    }

    /**
     * Get the error messagges if validation fails
     *
     * @return \Response
     */
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'messages' => $validator->errors()->all()
            ], 400)
        );
    }
}
