import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NonAutheticatedLayout from "@/Layouts/NonAuthenticatedLayout";
import MoviePosterInfo from "./Components/MovieInfoCard";
import Carousel from "./Components/Carousel";
import CommentsSection from "./Components/CommentsSection";

export default function Show({auth, movie, poster, showcases, comments}){
    return (
        <>
            {auth.user ? (
                <AuthenticatedLayout 
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{movie.title.toUpperCase()}</h2>}
                />
            ) : (
                <NonAutheticatedLayout/>
            )}
            <main className='min-h-screen bg-gray-100'>
                <div id='info-wrapper' className="max-w-5xl mx-auto pt-4 px-4 lg:px-8 lg:pt-8 flex flex-wrap">
                    <div className="basis-1/4 ">
                        <MoviePosterInfo numComments={comments.length} movie={movie} poster={poster}/>
                    </div>
                    <div className="basis-[calc(67%-26px)] ml-12 mt-3 p-4 rounded-md h-fit bg-white">
                        <div id='movie-sinopsis' className=" mb-3">
                            <p className=" text-sky-950 font-semibold">Sinopsis</p>
                            <p>{movie.sinopsis}</p>
                        </div>
                        <div id='movie-director' className=" mb-3">
                            <p className=" text-sky-950 font-semibold">Director</p>
                            <p>{movie.director}</p>
                        </div>
                        <div id='movie-cast' className=" mb-3">
                            <p className=" text-sky-950 font-semibold">Cast</p>
                            <p>{movie.cast.replace(/ - /g,", ")}</p>
                        </div>
                    </div>
                </div>
                <div id='images-wrapper' className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-6">
                    <h2 className="text-sky-950 font-semibold text-2xl py-3">Galería de imagenes</h2>
                    <Carousel className={'relative h-64 overflow-hidden rounded-lg md:h-96'} showcases={showcases}/>
                </div>
                <CommentsSection auth={auth} movie_id={movie.id} comments={comments}/>
            </main>
        </>
    );
}