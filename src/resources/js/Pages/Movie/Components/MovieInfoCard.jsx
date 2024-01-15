import MovieInfoCardSection from "./MovieInfoCardSection";

export default function MoviePosterInfo({numComments, movie, poster}){
    return (
        <div id="movie-poster-info-wrapper" className="bg-sky-950 flex flex-col border-2 border-sky-950">
            <div id='movie-poster-wrapper'>
                <img src={'/images/'+poster.src} className="w-full max-w-full"/>
            </div>
            <div id='movie-info-card' className="p-5 flex items-center text-white flex-wrap">
                <MovieInfoCardSection type='Genre' value={movie.genre}/>
                <MovieInfoCardSection type='Duration' value={movie.duration}/>
                <MovieInfoCardSection type='Score' value={numComments==0 ? 'N/A' : movie.score}/>
            </div>
        </div>
    );
}