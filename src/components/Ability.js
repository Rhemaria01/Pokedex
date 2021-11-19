import React,{useState} from 'react'
import axios from 'axios'
import {AiFillQuestionCircle} from 'react-icons/ai'
import {AiFillCloseCircle} from 'react-icons/ai'

const Ability = ({ability,index}) => {
    const [isFlipped,setIsFlipped] = useState(false);
    const [singleAbility,setSingleAbility] = useState([]);
    const fetchAbility = async () => {
        const {data} = await axios.get(`${ability.ability?.url}`);
        setSingleAbility(data.effect_entries[1].language.name === "en"? data.effect_entries[1].short_effect :data.effect_entries[0].short_effect)
        // console.log(data.effect_entries[1].effect)
    }

    const handleClick = () => {
        if(!isFlipped){
            fetchAbility()
        }
        
        setIsFlipped(!isFlipped);
    }
    return (
        // <div></div>
        <li className={`list-group-item boder-bottom user-select-none border-dark text-capitalize text-light p-1 fs-4 bg-danger`}  >{isFlipped? 
        <>
        {singleAbility} 
        <AiFillCloseCircle className="mb-1 ms-1" onClick={handleClick} style={{cursor:'pointer'}}/> 
        </>
        :
            <>
        {ability.ability?.name}
        <AiFillQuestionCircle className="mb-1 ms-1" onClick={handleClick} style={{cursor:'pointer'}}/>
        </>
        }</li>
    )
}

export default Ability
