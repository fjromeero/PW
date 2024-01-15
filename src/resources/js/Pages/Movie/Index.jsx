import MovieManager from "@/Components/MovieManager";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({auth, movies}){
    return (
        <AuthenticatedLayout 
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Manage movies</h2>}
            minheight='min-h-screen'
        >   
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {movies.map((movie) => 
                        <MovieManager key={movie.id} movie={movie}/>
                    )}    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}