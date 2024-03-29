export default function NextButtonSvg({ className, type , onClick}) {
    return (
        <button onClick={onClick} type='button' className={"absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "+className}>
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={type=='Next' ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}></path></svg>
                <span class="sr-only">{type}</span>
            </span>
        </button>
    );
}