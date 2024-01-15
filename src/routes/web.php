<?php

use App\Http\Controllers\MovieController;
use App\Http\Controllers\CommentController;
use App\Models\Comment;
use App\Models\Movie;
use App\Models\MoviePhoto;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index', [
        'regular' => Movie::where('status', 'regular')
            ->with(['photos' => fn ($query) => $query->where('type', 'poster')->select('movie_id', 'src')])
            ->limit(3)
            ->get(),
        'premiere' => Movie::where('status', 'premiere')
            ->with(['photos' => fn ($query) => $query->where('type', 'poster')->select('movie_id', 'src')])
            ->limit(3)
            ->get(),
        'soon' => Movie::where('status', 'soon')
            ->with(['photos' => fn ($query) => $query->where('type', 'poster')->select('movie_id', 'src')])
            ->limit(3)
            ->get(),
        'popular' => Movie::orderBy('score', 'desc')
            ->with(['photos' => fn ($query) => $query->where('type', 'poster')->select('movie_id', 'src')])
            ->limit(3)
            ->get(),
    ]);
});

Route::get('/releases', function () {
    return Inertia::render('MoviePage', [
        'movies' => Movie::where('status', 'premiere')
            ->with(['photos' => fn ($query) => $query->where('type', 'poster')->select('movie_id', 'src')])
            ->get(),
        'title' => 'Premiere',
    ]);
});

Route::get('/showing', function () {
    return Inertia::render('MoviePage', [
        'movies' => Movie::with(['photos' => fn ($query) => $query->where('type', 'poster')->select('movie_id', 'src')])->get(),
        'title' => 'Now Showing',
    ]);
});

Route::get('/movie/{movie}', [MovieController::class, 'show'])->name('movies.show');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('movies', MovieController::class)
    ->only('index','create', 'store', 'edit', 'update', 'destroy')
    ->middleware('admin', 'verified', 'auth');

Route::resource('comments', CommentController::class)
    ->only('store', 'destroy')
    ->middleware('verified', 'auth');

require __DIR__.'/auth.php';