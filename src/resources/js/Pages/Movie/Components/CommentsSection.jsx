import CommentsForm from "./CommentsForm";
import Comment from "./Comment";

export default function CommentsSection({auth , movie_id, comments}){
    return (
        <>
            <h3 className="text-sky-950 font-semibold text-2xl max-w-5xl mx-auto pt-4 px-4 lg:px-8 lg:pt-8">Comments</h3>
            <div id="comments-section" className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <CommentsForm movie_id={movie_id}/>
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {
                        comments.map(comment =>
                            <Comment key={comment.id} comment={comment} />
                        )
                    }
                </div>
            </div>
        </>
    );      
}