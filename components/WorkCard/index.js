import { useTheme } from "next-themes";
import React from "react";

const WorkCard = ({ img, name, description, technologies, onClick }) => {
  const { theme } = useTheme();

    return (
        <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link" >
            <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto" 
            style={{ height: "auto" }} 
            >
                <img
                    alt={name}
                    className="object-cover hover:scale-110 transition-all ease-out duration-300"
                    src={img}
                ></img>
            </div>
            <h1 className="mt-5 text-3xl font-medium">
                {name ? name : "Project Name"}
            </h1>
            <div className="flex space-x-3 my-2">
                {technologies.map((value, index) => (
                    <p key={index} className={`text-xs py-1 px-2 md:px-2 md:py-2 flex items-center justify-center text-center ${theme === 'dark' ? 'bg-white/30' : 'bg-black/5 0'} rounded-md`}>{value}</p>
                ))}
            </div>
            <h2 className="text-xl opacity-50">
                {description ? description : "Description"}
            </h2>
        </div>
    );
};

export default WorkCard;