import NewsCard from "./NewsCard";

export default function NewsSection() {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-xl font-bold text-gray-800">News</h2>
            <NewsCard key={1} id={1} title={"The Flash Director Teases Involvement In DC's Next Batman Movie"} image={'/images/news/news_1.webp'}/>
        </div>
    );
}