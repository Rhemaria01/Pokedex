import React,{useEffect,useState} from 'react'
import axios from 'axios'
const TypeWeak = ({url,type}) => {
    const [weakness, setWeakness] = useState([])
    const fetchTypes = async () => {
        // console.log(pokemon.types[0].type.url)
        const {data} = await axios.get(url);
        setWeakness(data.damage_relations.double_damage_from)
        console.log(data.damage_relations.double_damage_from)
    }
    useEffect(() => {
        fetchTypes()
    },[url])
    return (
        <div className="mt-5">
                <h4 className={`${type} fw-bold`}>{`Weaknesses as ${type} type`} </h4>
            {weakness.map((weak,index) => (
                <p className={`badge text-wrap fs-4 text-dark me-1 ${weak.name}`}> {`${weak.name}`} </p>
            ))}
        </div>
    )
}

export default TypeWeak
