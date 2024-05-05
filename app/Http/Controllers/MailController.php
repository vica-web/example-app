<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Mail\SendMail;
use App\Models\Email;
use Illuminate\Support\Facades\Mail;


class MailController extends Controller
{
    public function mailform()
    {
        return view('mail');
    }
    public function maildata(Request $request)
    {
        $first_name = $request->first;
        $last_name = $request->last;
        $email = $request->email;
        $phone = $request->phone;
        $message = $request->message;
        $attributes = request()->validate([
            'first' => 'required',
            'last' => 'required',
            'phone' => 'required',
            'message' => 'required',
            'email' => 'required|email|unique:users,email',
        ]);
        $save_email = Email::create($attributes);
        $send_mail = "info@vica.website";
        Mail::to($send_mail)->send(new SendMail($first_name, $last_name, $phone, $email, $message));
        return $request;
    }
}
