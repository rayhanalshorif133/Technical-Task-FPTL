<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $tasks = Task::all()->count();
        dd($tasks);
        return Inertia::render('Dashboard', compact('tasks'));
    }
}
