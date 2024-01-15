export default function Star({changeStar, setData, id, className}){
    return (
        <>
            <input type="radio" name="rating" id={'rating-'+id} value={id} className="sr-only" onClick={(e) => setData('score', e.target.value)}/>
            <label htmlFor={'rating-'+id} className={className+" text-4xl cursor-pointer"}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27l-5.27 3.18 1.09-6.01L2.5 9.82l6.05-.88L12 3l2.45 5.94 6.05.88-5.32 4.62 1.09 6.01z" />
                </svg>
            </label>
        </>
    );
}