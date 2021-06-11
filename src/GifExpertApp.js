import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // Constante con las categorias a manejar
    const [categories, setCategories] = useState(['One Punch'])

    //Evento del boton Agregar
    // const handleAdd = () => {

    //     //categories.push('Hunter'); error
    //     //setCategories(['Hunter', ...categories]); // Forma correcta, existe otra mejor (ya veremos)
    //     setCategories( cats => [...cats, 'Hunter2']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>

            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
