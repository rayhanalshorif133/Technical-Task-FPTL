<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable =
    [
        'title',
        'status',
        'description',
        'deadline',
    ];

    public function taskAssign()
    {
        return $this->hasMany(TaskAssign::class);
    }
}
