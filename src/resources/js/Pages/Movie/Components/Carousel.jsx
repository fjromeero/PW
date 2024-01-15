import NextButtonSvg from "./NextButtonSvg";
import { useState, useEffect } from "react";

export default function Caorusel({ showcases, className }) {

    const [showing, setShowing] = useState(0)

    const nextImage = () => {
        setShowing((showing + 1) % 4);
    }

    const previousImage = () => {
        setShowing((showing - 1) % 4);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setShowing((showing + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, [showing]);

    return (
        <div className={className}>
            <div className="relative w-full">
                <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
                    {
                        showcases.map((showcase, index) =>
                            <div className={showing == index ? 'transition-opacity duration-1000 ease-in-out' : 'transition-opacity duration-1000 ease-in-out opacity-0'}>
                                <img src={'/images/' + showcase.src} className="absolute block w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                            </div>
                        )
                    }
                </div>
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    {
                        showcases.map((showcase, index) =>
                            <button type="button" onClick={() => setShowing(index)} class={showing == index ? "w-3 h-3 rounded-full bg-white" : "w-3 h-3 rounded-full bg-slate-500"}></button>
                        )
                    }
                </div>
                <NextButtonSvg className={'left-0'} type={'Previous'} onClick={previousImage} />
                <NextButtonSvg className={'right-0'} type={'Next'} onClick={nextImage} />
            </div>
        </div>
    );
}