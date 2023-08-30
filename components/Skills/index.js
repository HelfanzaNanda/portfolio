import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ skills }) => {
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
        <ul className="list-disc grid grid-cols-2 pl-8">
            {
                skills.map((skill, index) => (
                    <li key={index} className="text-xl">
                        {skill.name}
                        <span className="text-gray-500 text-base">{ skill.description ? ` (${skill.description})` : null }</span>
                    </li>
                ))
            }
        </ul>
    );
};

export default ServiceCard;