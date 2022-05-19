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
        <div className={`card01  mt-5`}>
            
            <h1 className={`card01-header text-center text-info mt-3`}>PokeInfo</h1>
            <div className="row">
                <div className="col-md-6 text-center ">
                    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id<100 ? (pokemon.id<10 ? "00"+pokemon.id : "0"+pokemon.id) : pokemon.id}.png`} className={`img-fluid bg-info`}  alt=""  
                />
                <h4 className={`text-capitalize text-center  mt-2 ${pokemon.types[0].type.name} rounded`}>{`${pokemon.name} #${pokemon.id}`}</h4>
                </div>
                <div className="col-md-6">
                    <h3 className="text-dark  fs-2">Information</h3>
                    <div className="row mt-4">
                        <div className="col-sm-6">
                    <h4 className={`${pokemon.types[0].type.name}`}>Types</h4>
                    <ul className="list-group text-center list-group-flush border border-dark rounded ">
                        {pokemon.types.map((type,index) => <li className={`list-group-item boder-bottom border-dark text-capitalize text-light fs-4 ${type.type.name }`}>{type.type.name}</li>)}
                    </ul>
                        </div>
                        <div className="col-sm-6">
                    <h4 className="text-danger">Abilities</h4>
                    <ul className="list-group list-group-flush border border-dark rounded" style={{minWidth:'50%'}}>
                        {pokemon.abilities.map((ability,index) => <Ability ability={ability} index={index}/>)}
                    </ul>
                    </div>
                    </div>
                    <div className="row mt-3">
                    
                        <div className="col">
                            <h4 className={`text-primary ${pokeSpecies.is_mythical?"text-danger":pokeSpecies.is_legendary?"text-primary":"text-success"}`}>Rarity</h4>
                            <ul className="list-group list-group-flush border border-dark rounded ">
                                <li className={`list-group-item boder-bottom border-dark text-capitalize  fs-4 fw-bold  bg-primary ${pokeSpecies.is_mythical?"bg-danger text-light":pokeSpecies.is_legendary?"bg-primary text-light":"bg-success text-light"}`}>{pokeSpecies.is_mythical?"Mythical":pokeSpecies.is_legendary?"Legendary":"Common"}</li>
                            </ul>
                            
                        </div>
                        <div className="col">
                            <h4 className="text-info">Shape</h4>
                            <ul className="list-group list-group-flush border border-dark rounded ">
                                {<li className={`list-group-item boder-bottom border-dark text-capitalize text-light fs-4 bg-info`}>{pokeSpecies.shape?.name}</li>}
                            </ul>
                        </div>
                        <div className="col">
                            <h4 className="text-dark">Habitat</h4>
                            <ul className="list-group list-group-flush border border-dark rounded me-5 w-50 ">
                                {<li className={`list-group-item boder-bottom border-dark text-capitalize text-light fs-4 bg-dark`}>{typeof(pokeSpecies.habitat?.name) !== typeof(undefined) ? pokeSpecies.habitat?.name : "None"}</li>}
                            </ul>
                        </div>
                    </div>    
                </div>
            </div>
            <div className="row mt-5 mb-5">
            <div className="col text-center ms-3 border-end border-2 border-dark pe-3">
                                <Stats pokemon={pokemon}/>          
            </div>
            <div className="col text-center ms-3 border-end border-2 border-dark pe-3">
                                <Weakness pokemon={pokemon}/>        
            </div>
            <div className="col text-center ms-3 pe-3">
                                <OtherInfo pokemon={pokemon} pokeSpecies={pokeSpecies}/>        
            </div>
            </div>     
            <div className="row d-flex flex-column mt-5 mb-5">
            <h1 className="text-dark ms-2 text-center fw-bold">PokeMon Unite Info</h1>
            <div className="col  ms-3 text-center pe-3">
            <p className="badge bg-primary  fs-4 m-2">{`Base Experience: ${pokemon.base_experience}`}</p>  
            <p className="badge bg-success  fs-4 m-2">{`Base Happiness: ${pokeSpecies.base_happiness}`}</p>
            <p className="badge bg-info  fs-4 m-2">{`Capture Rate: ${pokeSpecies.capture_rate}`}</p>
            </div>
            <div className="col  ms-3 text-center pe-3">
            <p className="badge bg-danger  fs-4 m-2">{`${pokemon.is_default?"Default Pokemon":"Not Default Pokemon"}`}</p>
            <p className="badge bg-warning  fs-4 m-2">{`Hatch Counter: ${pokeSpecies.hatch_counter}`}</p>
            </div> 
            </div>
            <div className="row mt-5 mb-5">
            <div className="col  ms-3  pe-3">
            <h1 className="text-dark  text-center fw-bold" style={{fontSize: '75px'}}>Evolution Chain</h1>
                                <Evolution pokeSpecies={pokeSpecies} pokemon={pokemon}/>
            </div>
            </div>
        </div>
    )
}

export default PokeInfo