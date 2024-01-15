<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'sinopsis',
        'director',
        'cast',
        'genre',
        'duration',
        'score',
        'status',
    ];

    public function photos(): HasMany
    {
        return $this->hasMany(MoviePhoto::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function calculateAverageScore()
    {
        return (float)number_format($this->comments()->avg('score'));
    }

}
