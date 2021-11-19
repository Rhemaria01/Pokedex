import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {FaLongArrowAltRight} from 'react-icons/fa'

const Evolution = ({pokemon,pokeSpecies}) => {
    const [evolution, setEvolution] = useState("")
    const fetchEvolution = async () => {
        const {data} = await axios.get(`${pokeSpecies.evolution_chain?.url}`)
        console.log(data.chain.species.url.split('/')[6])
        setEvolution(data.chain)
    }
    useEffect(() => {
        fetchEvolution()
    },[pokeSpecies])
     
    return (
        <div className="d-flex flex-row justify-content-center text-center">
            
            <div className="p-2 ">
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${evolution.species?.url.split('/')[6]<100 ? (evolution.species?.url.split('/')[6]<10 ? "00"+evolution.species?.url.split('/')[6] : "0"+evolution.species?.url.split('/')[6]) : evolution.species?.url.split('/')[6]}.png`} alt=""
            className="border border-dark border-5 rounded-circle bg-light" 
            style={{width: '300px', height: '300px'}}
            />
            <h4 className={`text-capitalize mt-1 fs-2 ${pokemon.types[0].type.name}`}>{evolution.species?.name}</h4>
            </div>
            {evolution.evolves_to?.length > 0 
            ? 
            <>
            <div className="p-2">
            <FaLongArrowAltRight className="p-2" style={{color: 'black', height:'100px', width:'100px'}}/>
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${evolution.evolves_to[0].species?.url.split('/')[6]<100 ? (evolution.evolves_to[0].species?.url.split('/')[6]<10 ? "00"+evolution.evolves_to[0].species?.url.split('/')[6] : "0"+evolution.evolves_to[0].species?.url.split('/')[6]) : evolution.evolves_to[0].species?.url.split('/')[6]}.png`} alt="" 
            className="border border-dark border-5 bg-light" 
            style={{width: '300px', height: '300px', borderRadius: '50%'}}
            />
            <h4 className={`text-capitalize ps-5 ms-5 fs-2 mt-1 ${pokemon.types[0].type.name}`}>{evolution.evolves_to[0].species.name} </h4>
            </div> 
            {evolution.evolves_to[0].evolves_to?.length > 0
            ?
            <>
            <div className="p-2">
            <FaLongArrowAltRight className="p-2" style={{color: 'black', height:'100px', width:'100px'}}/>
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${evolution.evolves_to[0].evolves_to[0].species?.url.split('/')[6]<100 ? (evolution.evolves_to[0].evolves_to[0].species?.url.split('/')[6]<10 ? "00"+evolution.evolves_to[0].evolves_to[0].species?.url.split('/')[6] : "0"+evolution.evolves_to[0].evolves_to[0].species?.url.split('/')[6]) : evolution.evolves_to[0].evolves_to[0].species?.url.split('/')[6]}.png`} alt=""
            className="border border-dark border-5 bg-light" 
            style={{width: '300px', height: '300px', borderRadius: '50%'}}
            />
            <h4 className={`text-capitalize ps-5 ms-5 fs-2 mt-1 ${pokemon.types[0].type.name}`}>{evolution.evolves_to[0].evolves_to[0].species.name} </h4>
            </div>
            </>
            : null}
            </>
            : <h4 className={`text-capitalize ps-5 fs-2 ms-5 mt-1 ${pokemon.types[0].type.name}`}>{"(No Evolution)"}</h4>
}

        </div>
    )
}
// https://img.pokemondb.net/artwork/large/${evolution.species?.url.split('/')[6]}.jpg
export default Evolution
