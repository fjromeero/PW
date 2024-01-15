export default function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-6 py-3">
                <div className="flex text-center flex-col md:flex-row md:justify-evenly md:items-center">
                    <a className="my-1 text-sm text-sky-950 font-medium hover:text-indigo-500 md:mx-8 md:my-0" href="/">Home</a>
                    <a className="my-1 text-sm text-sky-950 font-medium hover:text-indigo-500 md:mx-8 md:my-0" href="/releases">Releases</a>
                    <a className="my-1 text-sm text-sky-950 font-medium hover:text-indigo-500 md:mx-8 md:my-0" href="/showing">Now Showing</a>
                    <a className="my-1 text-sm text-sky-950 font-medium hover:text-indigo-500 md:mx-8 md:my-0" href="#">Timetables</a>
                    <a className="my-1 text-sm text-sky-950 font-medium hover:text-indigo-500 md:mx-8 md:my-0" href="#">Prices</a>
                    <a className="my-1 text-sm text-sky-950 font-medium hover:text-indigo-500 md:mx-8 md:my-0" href="como_se_hizo.pdf">como_se_hizo</a>
                </div>
            </div>
        </nav>
    );
}