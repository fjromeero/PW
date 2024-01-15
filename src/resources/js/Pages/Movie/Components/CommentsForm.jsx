import InputError from "@/Components/InputError";
import PrimaryButton from '@/Components/PrimaryButton';
import React from 'react';
import { useForm} from '@inertiajs/react';
import StarRating from "./StarRaring";

export default function CommentsForm({movie_id}){

    const {data, setData, post, processing, errors, reset} = useForm({
        content: '',
        movie_id: movie_id,
        score: 0,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('comments.store'),{ onSuccess: () => reset() });
    }

    return (
        <>
            <form onSubmit={submit}>
                <StarRating score={data.score} setData={setData}/>
                <textarea
                    value={data.content}
                    placeholder="Add a comment"
                    className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                    onChange={(e) => setData('content', e.target.value)}
                    rows={4}
                >
                </textarea>
                <InputError message={errors.content} className="mt-2" />
                <PrimaryButton className="mt-2" disabled={processing}>Comment</PrimaryButton>
            </form>
        </>
    );
}