import React from 'react'
import axios from 'axios'
import TypeInfo from './TypeInfo';


const Types = () => {
    const types = ["normal","fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"];
    const fetchTypes = async ({index,setSingleType}) => {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/type/${index}`);
        setSingleType(data);

    }
    
    
    return (

        <div className="pt-5 text-center">
        {window.scrollTo(0, 0)}
            <h1>Types</h1>
            <div className="container">
                <div className="row p-3">

                    {types.map((type, index) => (
                        <TypeInfo index={index} types={type} fetchTypes={fetchTypes}/>
                    ))}
                </div>                
                </div>
        </div>
    )
}

export default Types
