import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from 'react-loader-spinner'
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
        <div className={`col-2 card mt-2  me-2 `} onClick={() => handleClick(singlePoke)} >
            {
                typeof(singlePoke.sprites?.front_default) === typeof(undefined) ? <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} /> : 
                <>
                <img src={singlePoke.sprites.front_default} className="card-img-top" alt={singlePoke.name} 
                onMouseOver={e => (e.currentTarget.src = singlePoke.sprites?.back_default)} 
                onMouseOut={e => (e.currentTarget.src = singlePoke.sprites?.front_default)}
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
