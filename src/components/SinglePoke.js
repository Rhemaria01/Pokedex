import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import { toast } from 'react-toastify'
const SinglePoke = ({pokemon,index,handleClick}) => {
    const [singlePoke, setSinglePoke] = useState([])
    const fetchSinglePoke = async () => {
        const {data} = await axios.get(`${pokemon.url}`)
        setSinglePoke(data)
    }
    useEffect(() => {
        fetchSinglePoke()
    }, [pokemon])
    return (
        
        <div className={`flexer card`} onClick={() => typeof(singlePoke.sprites?.front_default) === typeof(undefined) ?  toast.warning("Please wait") :handleClick(singlePoke)} >
            {
                typeof(singlePoke.sprites?.front_default) === typeof(undefined) ? <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> : 
                <>
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${singlePoke.id<100 ? (singlePoke.id<10 ? "00"+singlePoke.id : "0"+singlePoke.id) : singlePoke.id}.png`} className="card-img-top pokemon-image" alt={singlePoke.name} 
                />
                <h4 className={`card-title text-center  ${singlePoke.length === 0? null: singlePoke.types[0].type.name} text-capitalize`}>{`${singlePoke.name} #${singlePoke.id}`}</h4>
                <div className="flex-row">
                {
                    singlePoke.length === 0 ? null : singlePoke.types.map(type => {
                        return <p className={`text-center badge rounded-pill me-1 text-light fw-bold ${type.type.name}`}>{type.type.name}</p>
                    })
                }
                </div>
                </>
            }

            

        </div>
        
    )
}

export default SinglePoke
