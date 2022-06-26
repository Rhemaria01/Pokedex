import React,{useState,useEffect} from 'react'
import  axios  from 'axios'
import SinglePoke from '../components/SinglePoke'
import PokeInfo from '../components/PokeInfo'
import {ImShuffle} from 'react-icons/im'
import {CgPokemon} from 'react-icons/cg'
const pokemonPerPage = 20;
let arrayForHoldingPokemon = [];
const Pokedex = () => {
    const [pokedex, setPokedex] = useState([])
    
    const [pokemon, setPokemon] = useState("")
    const [flag, setFlag] = useState(false)
    const [sort, setSort] = useState("")
    const [pokemonToShow, setPokemonToShow] = useState([])
    const [next, setNext] = useState(20)
    const loopWithSlice = (start, end, pokemons) => {
        
        const slicedPokemon = pokemons.slice(start, end);
        arrayForHoldingPokemon = [ ...slicedPokemon];
        setPokemonToShow(arrayForHoldingPokemon);
      
    }
    const fetchPokedex = async () => {
        try {
            var url = `https://pokeapi.co/api/v2/pokemon?limit=898&offset=0`
            const {data} = await axios.get(url)
            try {
                
                switch (sort) {
                    case "Id":
                        setPokedex(data.results) 
                        loopWithSlice(0, pokemonPerPage, data.results);
                        break; 
                    case "Id-Reverse":
                        setPokedex(data.results.reverse())  
                        console.log(data.results.reverse())
                        loopWithSlice(0, pokemonPerPage, data.results.reverse());

                        break;  
                    case "A-Z":
                        setPokedex(data.results.sort((a,b) => a.name > b.name ? 1 : -1));  
                        loopWithSlice(0, pokemonPerPage, data.results.sort((a,b) => a.name > b.name ? 1 : -1)); 
                        break;
                    case "Z-A":
                        setPokedex(data.results.sort((a,b) => a.name > b.name ? -1 : 1));
                        loopWithSlice(0, pokemonPerPage, data.results.sort((a,b) => a.name > b.name ? -1 : 1));
                        break;   
                    case "Suprise":
                        for (var i = data.results.length - 1; i > 0; i--) {
 
                            // Generate random number
                            var j = Math.floor(Math.random() * (i + 1));
             
                            var temp = data.results[i];
                            data.results[i] = data.results[j];
                            data.results[j] = temp;
                        }
             
                        setPokedex(data.results)
                        loopWithSlice(0, pokemonPerPage, data.results);
                        break;
                           
                    default:
                        setPokedex(data.results)
                        loopWithSlice(0, pokemonPerPage, data.results);
                        break;
                    }
                    
            } catch (error) {
                console.log(error)
            }
            
            
        } catch  {
            
            console.log('error')
        }
    }
    useEffect(() => {
        // eslint-disable-next-line
        fetchPokedex()
        
    }, [sort])
    const handleShowMorePokemon = () => {
        loopWithSlice(0, next + pokemonPerPage, pokedex);
        setNext(next + pokemonPerPage);
      };
    const handleSuprise = () => {
        setSort("Suprise")
        fetchPokedex()
    }
    const handleClick = (pokemon) => {
        setPokemon(pokemon)
        setFlag(!flag)
    }
    return (
        <div className="flexer" >
        {window.scrollTo(0, 0)}
            <h1>Pokedex</h1>

            {flag ?
                <>
                <PokeInfo pokemon={pokemon}/>
                <div className="text-center">
                <button className="btn btn-danger" onClick={() =>setFlag(!flag)}>Back</button>
                </div>
                </>
                
             : 
             <>
             
             <div className="btn-group">
                <button className="btn btn-primary me-5 rounded fs-3 fw-bold " onClick={handleSuprise}><ImShuffle className="me-2 mb-1"/>Suprise me</button>
                <button type="button" className="btn btn-danger fs-3 fw-bold rounded"><CgPokemon className="me-2 mb-1"/> Sort by</button>
                <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item" onClick={() => setSort("A-Z")} style={{cursor: "pointer"}}>A-Z</li>
                    <li className="dropdown-item" onClick={() => setSort("Z-A")} style={{cursor: "pointer"}}>Z-A</li>
                    <li className="dropdown-item" onClick={() => setSort("Id")} style={{cursor: "pointer"}}>Pokedex Id</li>
                    <li className="dropdown-item" onClick={() => setSort("Id-Reverse")} style={{cursor: "pointer"}}>Pokedex Id Reverse</li>
                </ul>
            </div>
             
                <div className="pokedex-flexer">
                {pokemonToShow.map((pokemon, index) => (
                        <SinglePoke index={index} pokemon={pokemon} handleClick={handleClick}/>
                    ))
                    }
                    <button className='btn btn-primary mb-5' onClick={handleShowMorePokemon}>Load more</button>
                </div>                   
                
            </>
            }

                    

        </div>
    )
}

export default Pokedex;
