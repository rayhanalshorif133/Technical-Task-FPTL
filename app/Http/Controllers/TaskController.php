<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use App\Models\Task;
use App\Models\TaskAssign;
use App\Models\User;
use Illuminate\Http\RedirectResponse;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::select()
            ->orderBy('id', 'desc')
            ->with('taskAssign','taskAssign.user')
            ->get();
        $users = User::select()
            ->orderBy('id', 'desc')
            ->get();

        $usersAndTasks = [
            'users' => $users,
            'tasks' => $tasks
        ];
        return Inertia::render('Task', compact('usersAndTasks'));
    }

    public function create()
    {
        return Inertia::render('Task/Create');
    }

    public function store(Request $request):RedirectResponse
    {
        $request->validate([
            'title' => 'required',
            'description'=> 'required',
            'deadline' => 'required',
            'status' => 'required'
        ]);

        $task = new Task();
        $task->title = $request->title;
        $task->description = $request->description;
        $task->deadline = $request->deadline;
        $task->status = $request->status;
        $task->save();

        // Inertia flash
        return Redirect::route('task.index')->with('success', 'Task created successfully');
    }

    // assignStore
    public function assignStore(Request $request):RedirectResponse
    {
        $request->validate([
            'task_id' => 'required',
            'user_id'=> 'required',
        ]);

        $getTaskAssign = TaskAssign::where('task_id', $request->task_id)
            ->where('user_id', $request->user_id)
            ->first();

        if($getTaskAssign){
            $task = Task::find($request->task_id);
            $task->status = 'in-process';
            $task->save();
        }
        else{
            $task = Task::find($request->task_id);
            $task->status = 'in-process';
            $task->save();
            $user = User::find($request->user_id);
            $taskAssign = new TaskAssign();
            $taskAssign->task_id = $task->id;
            $taskAssign->user_id = $user->id;
            $taskAssign->assigned_by = Auth()->user()->id;
            $taskAssign->save();
        }
        return Redirect::route('task.index')->with('success', 'Task assigned successfully');
    }
}
