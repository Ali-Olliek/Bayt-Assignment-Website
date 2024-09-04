<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class StudentsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Student::factory()->count(20)->create();
    }
}
