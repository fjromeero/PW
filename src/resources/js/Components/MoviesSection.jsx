import MovieCard from "./MovieCard";

export default function MoviesSection({ title, movies, url , setHovering}) {
    return (
        <div className="py-3 px-6 bg-white rounded-xl text-center">
            <div>
                <h2 className='text-2xl font-xl font-bold text-gray-800 mb-5'>{title}</h2>
                <div className="grid grid-cols-auto-fit gap-10 justify-center h-auto">
                    {movies.map((movie) => 
                        <MovieCard setHovering={setHovering} movie={movie} key={movie.id} id={movie.id} title={movie.title} poster={movie.photos[0].src}/>
                    )}
                </div>
            </div>
            {url ? <a href={url} className="text-lg font-xl font-bold text-gray-800">More...</a> : null}
        </div>
    );
}