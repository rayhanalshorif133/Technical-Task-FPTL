<?php

namespace App\Http\Controllers;

use App\Mail\TaskNotify;
use Illuminate\Http\Request;
use Mail;

class MailController extends Controller
{
    public function sendMail()
    {
        $mailData = [
            'title' => 'Mail from laraveia.com',
            'body' => 'This is for testing email using smtp.'
        ];
         
        Mail::to('rayhanalshorif@gmail.com')->send(new TaskNotify($mailData));
           
        return response()->json(['message' => 'Email has been sent.']);

    }
}
