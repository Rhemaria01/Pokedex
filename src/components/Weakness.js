import React,{useState,useEffect} from 'react'

import TypeWeak from './TypeWeak'
const Weakness = ({pokemon}) => {
    const urls = pokemon.types.map(type => type.type.url)

    return (
        <div>
            <h2 className="text-secondary fw-bold">Weakness</h2>
            {urls.map((url,index) => <TypeWeak url={url} type={pokemon.types[index].type.name}/>)}
        </div>    
    )
}

export default Weakness
