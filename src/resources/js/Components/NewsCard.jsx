export default function NewsCard({id, title, image}){
    return (
        <a>
            <div className="p-3 rounded-lg">
                <img className="w-full" src={image}/>
                <h3>{title}</h3>
            </div>  
        </a>
    );
}