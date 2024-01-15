import Modal from "./Modal";
import DangerButton from './DangerButton';
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { Link} from '@inertiajs/react';
import { useState } from 'react';

export default function MovieManager({ movie }) {

    const [confirmingMovieDeletion, setConfirmingMovieDeletion] = useState(false);

    const confirmUserDeletion = () => {
        setConfirmingMovieDeletion(true);
    };

    const closeModal = () => {
        setConfirmingMovieDeletion(false);
    };

    return (
        <>
            <div className="p-6 flex space-x-2 justify-between">
                <p className="text-gray-500">{movie.title}</p>
                <div>
                    <Link className="px-2" href={route("movies.edit", movie.id)}>
                        <PrimaryButton className="bg-green-400 hover:bg-green-500">Modify</PrimaryButton>
                    </Link>
                    <PrimaryButton onClick={confirmUserDeletion} className="bg-red-600 hover:bg-red-700">Delete</PrimaryButton>
                    <Modal show={confirmingMovieDeletion} onClose={closeModal}>
                        <div className="p-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                Are you sure you want to delete the movie "{movie.title}"?
                            </h2>
                            <div className="mt-6 flex justify-end">
                                <Link as="button" href={route('movies.destroy', movie.id)} method="delete">
                                    <DangerButton className="ml-3">
                                    Delete Movie
                                    </DangerButton>
                                </Link>
                                <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    );
}