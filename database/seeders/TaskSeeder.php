<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Task::create(['title' => 'Task 1', 
        'description' => 'Task 1 description', 'status' => 'open', 
        'deadline' => '2021-08-01 00:00:00']);

        Task::create(['title' => 'Task 2',
        'description' => 'Task 2 description', 'status' => 'open',
        'deadline' => '2021-08-02 00:00:00']);

        Task::create(['title' => 'Task 3',
        'description' => 'Task 3 description', 'status' => 'open',
        'deadline' => '2021-08-03 00:00:00']);

        Task::create(['title' => 'Task 4',
        'description' => 'Task 4 description', 'status' => 'open',
        'deadline' => '2021-08-04 00:00:00']);
    }
}
