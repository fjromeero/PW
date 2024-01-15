export default function MovieCard({id, movie, title, poster, setHovering}){
    const handleMouseOver = () => {
        // Aquí puedes realizar las acciones que deseas ejecutar cuando el ratón se sitúa sobre el div
        setHovering({
            show: true,
            movie: movie
        });
        console.log('hovering');
      };
    return (
        
        <div>
            <a className="p-2 " href={'/movie/' + id}>
                <img onMouseOver={handleMouseOver} src={'/images/' + poster} alt={title} className='w-full h-4/5'/>
                <h3 className=" text-left py-2 text-xl font-xl font-bold text-gray-800">{title}</h3>
            </a>
        </div>
    );
}