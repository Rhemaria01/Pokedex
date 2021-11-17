import React,{useState,useEffect} from 'react'
import  axios  from 'axios'
import SinglePoke from '../components/SinglePoke'
import PokeInfo from '../components/PokeInfo'

const Pokedex = () => {
    const [pokedex, setPokedex] = useState([])
    const [pokemon, setPokemon] = useState("")
    const [flag, setFlag] = useState(false)
    const fetchPokedex = async () => {
        try {
            var url = `https://pokeapi.co/api/v2/pokemon?limit=898&offset=0`
            const {data} = await axios.get(url)
            setPokedex(data)
        } catch  {
            
            console.log('error')
        }
    }
    useEffect(() => {
        fetchPokedex()
    }, [])
    const handleClick = (pokemon) => {
        setPokemon(pokemon)
        setFlag(!flag)
    }
    return (
        <div className="pt-5 flexer" >
        {window.scrollTo(0, 0)}
            <h1>Pokedex</h1>

            {flag ?
                <div className="cardbb ">
                <div className="row">
                <PokeInfo pokemon={pokemon}/>
                <div className="text-center">
                <button className="btn btn-danger w-50" onClick={() =>setFlag(!flag)}>Back</button>
                </div>
                </div>                
                </div>
             : 
             <div className="cardaa">
                <div className="row">
                {pokedex.results?.map((pokemon, index) => (
                        <SinglePoke index={index} pokemon={pokemon} handleClick={handleClick}/>
                    ))}
                    </div>                
                </div>
            }

                    

        </div>
    )
}

export default Pokedex;
