<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        	
        User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
        ]);

        User::create([
            'name' => 'Rayhan',
            'email' => 'rayhanalshorif@gmail.com',
            'password' => Hash::make('password'),
        ]);

        User::create([
            'name' => 'Shorif',
            'email' => 'rayhanalshorif1@gmail.com',
            'password' => Hash::make('password'),
        ]);
    }
}
