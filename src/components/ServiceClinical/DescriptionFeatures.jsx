import React from "react";
import { MoreOfService } from "./Tarjet";


const FeaturesDescription = ({icono,title, description}) => {
    return(
        <div className="p-11  bg-white border-2 border-transparent rounded-lg transition-all duration-300 ease-in-out hover:border-blue-900">
            <div className="">{icono}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

const FeaturesMoreDescription = () =>{
    return(
        <div className="container mx-auto flex justify-center items-center h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {MoreOfService.map((container, index) => (
                    <FeaturesDescription
                       key={index}
                       icono={container.icono}
                       title={container.title}
                       description={container.description} 
                    />
                ))}
            </div>
        </div>
    );
}

export default FeaturesMoreDescription;