import { useState, useEffect } from "react";
import { GiphyApiReturn } from "../helpers/GiphyApiReturn";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        setTimeout(() => {
            GiphyApiReturn(category).then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
        }, 2000);
    }, [category])


    return state
}