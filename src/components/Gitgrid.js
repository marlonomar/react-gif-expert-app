import React from "react";
import CreateImgGrid from "./CreateImgGrid";
import { useFetchGifs } from "../hooks/useFetchGifs";

function Gitgrid({ category }) {

    const {data , loading} = useFetchGifs(category);
    
    return (
        <div className="card">
             <p>{(loading) ? 'cargando...' : category}</p>
            {data.map(img => {
                return <CreateImgGrid {...img} key={img.id}/>
            })}
        </div>
    )
}

export default Gitgrid