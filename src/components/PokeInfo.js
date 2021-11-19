import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import  axios  from 'axios'
import Stats from './Stats'
import Weakness from './Weakness'
import OtherInfo from './OtherInfo'
import Evolution from './Evolution'
const PokeInfo = ({pokemon}) => {

    const [pokeSpecies, setPokeSpecies] = useState({})
    const [pokeRegion, setPokeRegion] = useState({})
    const fetchPokeSpecies = async (pokemon) => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`
            const {data} = await axios.get(url)
        setPokeSpecies(data)
        if(data.evolves_from_species === null){
            const url02 = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}/encounters`
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
        <div className={`card01`}>
            
            <h1 className={`card01-header text-center text-info mt-3`}>PokeInfo</h1>
            <div className="row">
                <div className="col-md-6 text-center ">
                    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id<100 ? (pokemon.id<10 ? "00"+pokemon.id : "0"+pokemon.id) : pokemon.id}.png`} className={`img-fluid bg-info`}  alt=""  style={{
                    width: '500px',
                    height: '500px',
                }}
                />
                <h4 className={`text-capitalize text-center  mt-2 ${pokemon.types[0].type.name} rounded`}>{`${pokemon.name} #${pokemon.id}`}</h4>
                </div>
                <div className="col-md-6">
                    <h3 className="text-dark  fs-2">Information</h3>
                    <div className="row mt-4">
                        <div className="col-sm-6">
                    <h4 className={`${pokemon.types[0].type.name}`}>Types</h4>
                    <ul className="list-group text-center list-group-flush border border-dark rounded me-5 w-50 ">
                        {pokemon.types.map((type,index) => <li className={`list-group-item boder-bottom border-dark text-capitalize text-light fs-4 ${type.type.name }`}>{type.type.name}</li>)}
                    </ul>
                        </div>
                        <div className="col-sm-6">
                    <h4 className="text-danger">Abilities</h4>
                    <ul className="list-group list-group-flush border border-dark rounded me-5 w-50 ">
                        {pokemon.abilities.map((ability,index) => <li className={`list-group-item boder-bottom border-dark text-capitalize text-light fs-4 bg-danger`}>{ability.ability?.name}</li>)}
                    </ul>
                    </div>
                    </div>
                    <div className="row mt-3">
                    {
                        pokeSpecies.evolves_from_species !== null ?
                        <div className="col-sm-6">
                        <h4 className="text-primary">Evolves From</h4>
                        <ul className="list-group list-group-flush border border-dark rounded me-5 w-50 ">
                            <li className={`list-group-item boder-bottom border-dark text-capitalize text-light evolution fs-4 ${pokemon.types[0].type.name}`} >{pokeSpecies.evolves_from_species?.name}</li>
                        </ul>
                        </div>
                        :
                        <div className="col-sm-6 mb-2">
                        <h4 className="text-primary">Found in Regions:</h4>
                        <ul className="list-group list-group-flush border border-dark rounded me-5 w-75 ">
                            {typeof(pokeRegion[0])===typeof(undefined) ? <li className={`list-group-item boder-bottom border-dark text-capitalize text-light fs-4 bg-primary`}>Rare</li> : pokeRegion.map((location,index) => index<=4 ?<li className={`list-group-item boder-bottom border-dark text-capitalize text-light fs-4 bg-primary`}>{location.location_area.name}</li>:null)}
                        </ul>
                        </div>
                    }
                        <div className="col-sm-6">
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