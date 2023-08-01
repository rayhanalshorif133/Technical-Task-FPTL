<?php

namespace App\Http\Controllers;

use App\Mail\TaskNotify;
use Mail;
use Illuminate\Http\Request;

class MailController extends Controller
{
    public function sendMail()
    {
        $mailData = [
            'title' => 'Task Title',
            'status' => 'Task Status',
            'description' => 'Task Description',
            'deadline' => 'TaskDeadline',
        ];
         
        Mail::to('rayhanalshorif12@gmail.com')->send(new TaskNotify($mailData));
           
        return response()->json(['message' => 'Email has been sent.']);

    }
}
