/*
Custom hook
Realiza el trabajao pesado de obtencion de informacion de la API
Es llamado por GifGrid.js
*/
import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    })

   useEffect( () => {

        getGifs( category )
        .then( imgs => {

            setState({
                data: imgs,
                loading: false
            });

        });
        
   }, [category])

    return state; // Este es el formato que tiene el state -> {data:[], loading: true}
}
