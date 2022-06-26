import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import  axios  from 'axios'
import Stats from './Stats'
import Weakness from './Weakness'
import OtherInfo from './OtherInfo'
import Evolution from './Evolution'
import Ability from './Ability'
const PokeInfo = ({pokemon}) => {

    const [pokeSpecies, setPokeSpecies] = useState({})
    const [pokeRegion, setPokeRegion] = useState({})
    const fetchPokeSpecies = async (pokemon) => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`
            const {data} = await axios.get(url)
        setPokeSpecies(data)
        if(data.evolves_from_species === null){
            const url02 = `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/encounters`
            const {data:data02} = await axios.get(url02)
            setPokeRegion(data02)
        }
        } catch (error) {  
            console.log(error)
        }
        
    }
    useEffect(() => {
        fetchPokeSpecies(pokemon)
    },[pokemon])
    
    return (
        
            <div className="pokeinfo-card">
            <h1 className={`card01-header grid-header text-center text-info mt-3`}>PokeInfo</h1>
            <div className='grid-item-01 text-center'>
                
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id<100 ? (pokemon.id<10 ? "00"+pokemon.id : "0"+pokemon.id) : pokemon.id}.png`} className={`img-fluid pokeinfo-image bg-info`}  alt=""  />
                <h4 className={`text-capitalize mt-2 ${pokemon.types[0].type.name} rounded`}>{`${pokemon.name} #${pokemon.id}`}</h4>
            </div>
            <div className='grid-item-02'>
                <div className='grid-item-02-01 '>
                <h3 className="text-dark text-center fs-2">Information</h3>
                </div>
                <div className="grid-item-02-02 ">
                <h4 className={`${pokemon.types[0].type.name}`}>Types</h4>
                <ul className="list-group text-center list-group-flush border border-dark rounded ">
                    {pokemon.types.map((type,index) => <li className={`list-group-item boder-bottom border-dark text-capitalize text-light fs-4 ${type.type.name }`}>{type.type.name}</li>)}
                </ul>
                </div>
                <div className='grid-item-02-03'>
                <h4 className="text-danger">Abilities</h4>
                <ul className="list-group list-group-flush border border-dark me-2 rounded" style={{minWidth:'75%'}}>
                    {pokemon.abilities.map((ability,index) => <Ability ability={ability} index={index}/>)}
                </ul>
                </div>
                <div className='grid-item-02-04'>
                <h4 className={`text-primary ${pokeSpecies.is_mythical?"text-danger":pokeSpecies.is_legendary?"text-primary":"text-success"}`}>Rarity</h4>
                            <ul className="list-group list-group-flush border border-dark rounded ">
                                <li className={`list-group-item boder-bottom border-dark text-capitalize  fs-4 fw-bold  bg-primary ${pokeSpecies.is_mythical?"bg-danger text-light":pokeSpecies.is_legendary?"bg-primary text-light":"bg-success text-light"}`}>{pokeSpecies.is_mythical?"Mythical":pokeSpecies.is_legendary?"Legendary":"Common"}</li>
                            </ul>
                </div>
                <div className='grid-item-02-05'>
                <h4 className="text-info">Shape</h4>
                <ul className="list-group list-group-flush border border-dark rounded ">
                    {<li className={`list-group-item boder-bottom border-dark text-capitalize text-light fs-4 bg-info`}>{pokeSpecies.shape?.name}</li>}
                </ul>   
                </div>
                <div className='grid-item-02-06'>
                <h4 className="text-dark">Habitat</h4>
                <ul className="list-group list-group-flush border border-dark rounded me-2 ">
                    {<li className={`list-group-item boder-bottom border-dark text-capitalize text-light fs-4 bg-dark`}>{typeof(pokeSpecies.habitat?.name) !== typeof(undefined) ? pokeSpecies.habitat?.name : "None"}</li>}
                </ul>
                </div>
            </div>
            <div className='grid-item-03 '>
            <div className='grid-item-03-01 pe-5 ps-5 text-center'>
            <Stats pokemon={pokemon}/>          
            </div>
            <div className='grid-item-03-02'>
            <Weakness pokemon={pokemon}/>
            </div>
            <div className='grid-item-03-03'>
            <OtherInfo pokemon={pokemon} pokeSpecies={pokeSpecies}/>
            </div>
            </div>
            <div className='grid-item-04'>
            <h1 className="text-dark  text-center fw-bold resizer" >Evolution Chain</h1>
                                <Evolution pokeSpecies={pokeSpecies} pokemon={pokemon}/>
            
            </div>
            {/* 
                 
            <div className="row mt-5 mb-5">
            <div className="col  ms-3  pe-3">
            <h1 className="text-dark  text-center fw-bold" style={{fontSize: '75px'}}>Evolution Chain</h1>
                                <Evolution pokeSpecies={pokeSpecies} pokemon={pokemon}/>
            </div>
            </div> */}
            
        </div>
    )
}

export default PokeInfo