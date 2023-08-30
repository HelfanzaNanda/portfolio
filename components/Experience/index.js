import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ experiences }) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState();

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        // <div className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50" } hover:scale-105 link`} >
        //     <h1 className="text-xl">{name}</h1>
        //     <p className="mt-5 opacity-40 text-xl">
        //         {description}
        //     </p>
        // </div>
        <div className="space-y-3 text-xl">
            {
                experiences.map((item, index) => (
                    <div key={index} className="grid grid-cols-2">
                        <div >
                            <div>{item.dates}</div>
                            <span className="text-gray-500 text-base">{item.type}</span>
                        </div>
                        <div >
                            <div>{item.position}</div>
                            <span className="text-gray-500 text-base">{item.bullets}</span>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default ServiceCard;