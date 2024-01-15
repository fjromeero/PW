<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Movie/Index', [
            'movies' => Movie::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Movie/Create',[
            //
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:50|unique:movies',
            'sinopsis' => 'required|string|max:500',
            'director' => 'required|string|max:30',
            'cast' => 'required|string|max:60',
            'genre' => 'required|string|max:30',
            'duration' => 'required|integer',
            'score' => 'required|integer|min:0|max:10',
            'status' => 'required|string|in:regular,premiere,soon',
            'poster' => 'required|string|max:50',
            'showcases' => 'required|string|max:250',
        ]);

        $movie = Movie::create([
            'title' => $validated['title'],
            'sinopsis' => $validated['sinopsis'],
            'director' => $validated['director'],
            'cast' => $validated['cast'],
            'genre' => $validated['genre'],
            'duration' => $validated['duration'],
            'score' => $validated['score'],
            'status' => $validated['status'],
        ]);

        $movie->photos()->create([
            'src' => $validated['poster'],
            'type' => 'poster',
        ]);

        $showcases = explode(' - ', $validated['showcases']);

        foreach($showcases as $showcase) {
            $movie->photos()->create([
                'src' => $showcase,
                'type' => 'showcase',
            ]);
        }

        return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        return Inertia::render('Movie/Show', [
            'movie'=> $movie,
            'poster'=> $movie->photos()->where('type', 'poster')->get(['src'])->first(),
            'showcases' => $movie->photos()->where('type', 'showcase')->get(['src']),
            'comments' => $movie->comments()->with('user')->orderBy('created_at', 'desc')->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie): Response
    {
        return Inertia::render('Movie/Edit', [
            'movie' => $movie,
            'poster' => $movie->photos()->where('type', 'poster')->get(['src'])->first(),
            'showcases' => $movie->photos()->where('type', 'showcase')->get(['src']),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Movie $movie) : RedirectResponse
    {
        $this->authorize('update', $movie);

        $validated = $request->validate([
            'title' => 'required|string|max:50',
            'sinopsis' => 'required|string|max:255',
            'director' => 'required|string|max:30',
            'cast' => 'required|string|max:60',
            'genre' => 'required|string|max:30',
            'duration' => 'required|integer',
            'score' => 'required|integer|min:0|max:10',
            'status' => 'required|string|in:regular,premiere,soon',
            'poster' => 'required|string|max:50',
            'showcases' => 'required|string|max:250',
        ]);

        $movie->update([
            'title' => $validated['title'],
            'sinopsis' => $validated['sinopsis'],
            'director' => $validated['director'],
            'cast' => $validated['cast'],
            'genre' => $validated['genre'],
            'duration' => $validated['duration'],
            'score' => $validated['score'],
            'status' => $validated['status'],
        ]);

        $movie->photos()->where('type', 'poster')->update([
            'src' => $validated['poster'],
        ]);

        $showcases = explode(' - ', $validated['showcases']);

        $movie->photos()->where('type', 'showcase')->delete();

        foreach($showcases as $showcase) {
            $movie->photos()->create([
                'src' => $showcase,
                'type' => 'showcase',
            ]);
        }

        return redirect(route('movies.index'));

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie): RedirectResponse
    {
        $this->authorize('delete', $movie);
        
        $movie->delete();

        return redirect(route('movies.index'));
    }
}
