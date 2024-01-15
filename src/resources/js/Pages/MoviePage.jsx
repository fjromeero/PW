import { Link, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NonAutheticatedLayout from '@/Layouts/NonAuthenticatedLayout';
import Navbar from '@/Components/Navbar';
import MoviesSection from '@/Components/MoviesSection';
import NewsSection from '@/Components/NewsSection';
import Modal from '@/Components/Modal';
import { useState } from 'react';
import SecondaryButton from '@/Components/SecondaryButton';

export default function MoviePage({ auth, movies, title}) {
    const [hovering, setHovering] = useState({
        show: false,
        movie: null
    });

    const closeModal = () => {
        setHovering(prevData => ({
            show: false,
            movie: prevData.movie
        }));
    };

    return (
        <>
            <Head title='Cinema Jove' />
            {auth.user ? (
                <AuthenticatedLayout user={auth.user}/>
            ) : (
                <NonAutheticatedLayout/>
            )}
            <Navbar/>
            <main className='min-h-screen bg-gray-100 flex py-7'>
                <aside className='max-w-1/3 text-sky-950 mx-auto w-96 pl-4'>
                    <NewsSection/>
                </aside>
                <div  className=' max-w-index-content w-full mx-auto'>
                    <section className='my-5'>
                        <MoviesSection setHovering={setHovering} title={title} movies={movies} />
                    </section>
                </div>
                <Modal show={hovering.show} maxWidth='md' onClose={closeModal} >
                    <div className='p-6'>
                        <h2 className="text-lg font-medium text-gray-900">
                            {hovering.movie && hovering.movie.title ? hovering.movie.title : 'No title'}
                        </h2>
                        <h2 className="text-lg font-medium text-gray-900">
                            {hovering.movie && hovering.movie.genre ? hovering.movie.genre : 'No genre'}
                        </h2>
                        <div className="mt-6 flex">
                            <SecondaryButton onClick={closeModal}>Close</SecondaryButton>
                        </div>
                    </div>
                </Modal>
            </main>
        </>
    );
}