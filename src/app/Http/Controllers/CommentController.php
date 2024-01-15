<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) : RedirectResponse
    {
        $validated = $request->validate([
            'content' => 'required',
            'movie_id' => 'required|exists:movies,id',
            'score' => 'required|integer|min:0|max:10',
        ]);
    
        $comment = Comment::create([
            'content' => $validated['content'],
            'movie_id' => $validated['movie_id'],
            'user_id' => auth()->user()->id,
            'score' => $validated['score'],
        ]);

        $movie = Movie::find($validated['movie_id']);
        $averageScore = $movie->calculateAverageScore();
        $movie->score = $averageScore;
        $movie->save();
    
        return redirect(route('movies.show', $validated['movie_id']));
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
