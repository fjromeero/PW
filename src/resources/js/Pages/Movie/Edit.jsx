import EditMovieForm from "@/Components/EditMovieForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({auth, movie, poster, showcases}) {
    return (
        <AuthenticatedLayout 
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit movie</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <EditMovieForm movie={movie} poster={poster} showcases={showcases} className="max-w-2xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}