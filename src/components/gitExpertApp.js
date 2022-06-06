
import React from "react";
import { useState } from "react";

// components
import AddCategory from "./AddCategory";
import Gitgrid from "./Gitgrid";
function GitExpertApp() {
    const [categorys, setCategorys] = useState([]);
    return (
        <div className="gitExpertApp">
            <h2>GitExpertApp</h2>
            <AddCategory setCategorys={setCategorys} />
            <hr />
            <ul className="card-grid">
                {
                    categorys.map((category) => {
                        return (

                            <Gitgrid category={category} key={category} />

                        )
                    })
                }
            </ul>
        </div>
    )
}

export default GitExpertApp