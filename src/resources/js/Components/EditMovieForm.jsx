import PrimaryButton from "./PrimaryButton";
import InputError from '@/Components/InputError';
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
import TextArea from "./TextArea";
import { useForm } from "@inertiajs/react";

export default function AddMovieForm({className = '', movie , poster, showcases}) {

    const showcasesSrc = showcases.map((showcase) =>  showcase.src).join(' - ');
    
    const {data, setData, patch, errors, processing} = useForm({
        title: movie.title,
        sinopsis: movie.sinopsis,
        director: movie.director,
        cast: movie.cast,
        genre: movie.genre,
        duration: movie.duration,
        score: movie.score,
        status: movie.status,
        poster: poster.src,
        showcases: showcasesSrc,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('movies.update', movie.id));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Movie info</h2>
                <p className="mt-1 text-sm text-gray-600">
                    For fields where multiple values are inserted e.g. cast, genre, images. Separate each other with a ' - '.
                </p>
            </header>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="title" value="Title" />
                    <TextInput
                        id="title"
                        className="mt-1 block w-full"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        required
                        isFocused
                    />
                    <InputError className="mt-2" message={errors.title} />
                </div>
                <div>
                    <InputLabel htmlFor="sinopsis" value="Sinopsis" />
                    <TextArea
                        id="sinopsis"
                        className="mt-1 block w-full"
                        value={data.sinopsis}
                        onChange={(e) => setData('sinopsis', e.target.value)}
                        required
                        rows={4}
                        placeholder="Write a sinopsis for this movie"
                    />
                </div>
                <div>
                    <InputLabel htmlFor="director" value="Director" />
                    <TextInput
                        id="director"
                        className="mt-1 block w-full"
                        value={data.director}
                        onChange={(e) => setData('director', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.director} />
                </div>
                <div>
                    <InputLabel htmlFor="cast" value="Cast" />
                    <TextInput
                        id="cast"
                        className="mt-1 block w-full"
                        value={data.cast}
                        onChange={(e) => setData('cast', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.cast} />
                </div>
                <div>
                    <InputLabel htmlFor="genre" value="Genre" />
                    <TextInput
                        id="genre"
                        className="mt-1 block w-full"
                        value={data.genre}
                        onChange={(e) => setData('genre', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.genre} />
                </div>
                <div>
                    <InputLabel htmlFor="duration" value="Duration" />
                    <TextInput
                        id="duration"
                        className="mt-1 block w-full"
                        value={data.duration}
                        onChange={(e) => setData('duration', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.duration} />
                </div>
                <div>
                    <InputLabel htmlFor="status" value="Status" />
                    <TextInput
                        id="status"
                        className="mt-1 block w-full"
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.status} />
                </div>
                <div>
                    <InputLabel htmlFor="poster" value="Poster" />
                    <TextInput
                        id="poster"
                        className="mt-1 block w-full"
                        value={data.poster}
                        onChange={(e) => setData('poster', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.poster} />
                </div>
                <div>
                    <InputLabel htmlFor="showcases" value="Showcases" />
                    <TextInput
                        id="showcases"
                        className="mt-1 block w-full"
                        value={data.showcases}
                        onChange={(e) => setData('showcases', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.showcases} />
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
                </div>
            </form>
        </section>
    );

}