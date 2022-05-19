import React,{useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Types from '../components/Types'
import PokeInfo from '../components/PokeInfo'
import { Link } from 'react-router-dom'


const PokeType = () => {
    const [pokemon,setPokemon] = useState([])
    const [pokeName,setPokeName] = useState("")
    const fetchPokemonType = async () => {
        try {
            var url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
            const {data} = await axios.get(url)
            setPokemon(data)
        } catch  {
            
            toast.error(`No Pokemon Found: ${pokeName}`)
        }
    }    
    return ( 
        <div className="flexer">
            <h1>PokeFinder</h1>
            {typeof(pokemon.name) !== typeof(undefined) ? 
            <>
            <div className="search-card">
            <div className="input-group mb-3 text-center" >
                <input type="text"  value={pokeName} placeholder="Enter Pokemon Name or ID" className="border inputBox text-center w-75 text-uppercase" onChange={(e) => setPokeName(e.target.value.toLowerCase())}/>
                    <button className="btn btn01 w-25" type="button" id="button-addon2" onClick={fetchPokemonType}>Search</button>
                </div>
            <div className="imgBox row">
                <div className="col-6 border-end border-warning">
            <img 
            src={pokemon.sprites?.front_default}
            className="card-img-top" 
            onMouseOver={e => (e.currentTarget.src = pokemon.sprites?.back_default)} 
            onMouseOut={e => (e.currentTarget.src = pokemon.sprites?.front_default)}             
            alt="..." />
            <p className="text-center text-decoration-underline fw-bold">Normal</p>
            </div>
            <div className="col-6 border-start border-warning">
            <img 
            src={pokemon.sprites?.front_shiny}
            className="card-img-top" 
            onMouseOver={e => (e.currentTarget.src = pokemon.sprites?.back_shiny)} 
            onMouseOut={e => (e.currentTarget.src = pokemon.sprites?.front_shiny)}             
            alt="..." />
            <p className="text-center text-decoration-underline fw-bold">Shiny</p>
            </div>
            </div>
            <div className="card-body">
                <h4 className={`card-title text-capitalize text-center ${pokemon.types[0].type.name}`}>{`${pokemon.name} #${pokemon.id}`}</h4>
                <h5 className="card-text text-success">Types:</h5>
                <ul className="list-group list-group-flush border border-dark rounded mb-5 ">
                    {pokemon.types.map(type => <Link to={`/types/#${type.type.name}`} className="link"><li className={`list-group-item boder-bottom border-dark text-capitalize text-light fs-4 ${type.type.name}`}>{type.type.name}</li></Link>)}
                </ul>
            </div>
            </div>  
            <PokeInfo pokemon={pokemon}/>    
            </>
            : 
            <>
            <div className="search-card">
                <div className="input-group mb-3 text-center">
            <input type="text"  value={pokeName} placeholder="Enter Pokemon Name or ID" className="w-75 border inputBox text-center text-uppercase" onChange={(e) => setPokeName(e.target.value.toLowerCase())}/>
            <button className="btn btn01 w-25 float-end" onClick={fetchPokemonType}>Search</button>
            </div>
            <h1 className="text-center text-dark">Search Pokemon</h1>
            </div>
            <Types/>
            </>
            
             }
        </div>
    )
}

export default PokeType
