import React,{useState} from 'react'

const TypeInfo = ({fetchTypes, types, index}) => {
    const [singleType, setSingleType] = useState([]);
    const [isFlipped,setIsFlipped] = useState(false);
    const flipCard = (index) => {
        
        if(!isFlipped){
            fetchTypes({index,setSingleType});
        }
        setIsFlipped(!isFlipped);
        
    }
    return (
        <div className={`col-2 card mt-2 ${types}`} onClick={() => flipCard(index+1)} id={types}>
                        <p className="fs-1 text-light text-capitalize">{types}</p>
                        {
                            isFlipped ? (
                                <div className="card-body">
                                    <p className="card-text">Double Damage From: {singleType.damage_relations?.double_damage_from.map(type => <span className={types === type.name ? (`badge text-wrap text-dark me-1 self`) : (`badge text-wrap text-dark me-1 ${type.name}`) }> {`${type.name}`} </span>)}</p>
                                    {singleType.damage_relations?.double_damage_to.length !==0 ? (
                                        <p className="card-text">Double Damage To: {singleType.damage_relations?.double_damage_to.map(type => <span className={types === type.name ? (`badge text-wrap text-dark me-1 self`) : (`badge text-wrap text-dark me-1 ${type.name}`) }> {`${type.name}`} </span>)}</p>
                                    ) : (null)}
                                    {singleType.damage_relations?.half_damage_from.length !==0 ? (
                                        <p className="card-text">Half Damage From: {singleType.damage_relations?.half_damage_from.map(type => <span className={types === type.name ? (`badge text-wrap text-dark me-1 self`) : (`badge text-wrap text-dark me-1 ${type.name}`) }> {`${type.name}`} </span>)}</p>
                                    ) : (null)}
                                    {singleType.damage_relations?.half_damage_to.length !==0 ? (
                                        <p className="card-text">Half Damage To: {singleType.damage_relations?.half_damage_to.map(type => <span className={types === type.name ? (`badge text-wrap text-dark me-1 self`) : (`badge text-wrap text-dark me-1 ${type.name}`) }> {`${type.name}`} </span>)}</p>
                                    ) : (null)}
                                    {singleType.damage_relations?.no_damage_from.length !==0 ? (
                                        <p className="card-text">No Damage From: {singleType.damage_relations?.no_damage_from.map(type => <span className={types === type.name ? (`badge text-wrap text-dark me-1 self`) : (`badge text-wrap text-dark me-1 ${type.name}`) }> {`${type.name}`} </span>)}</p>
                                    ) : (null)}
                                    {singleType.damage_relations?.no_damage_to.length !==0 ? (
                                        <p className="card-text">No Damage To: {singleType.damage_relations?.no_damage_to.map(type => <span className={types === type.name ? (`badge text-wrap text-dark me-1 self`) : (`badge text-wrap text-dark me-1 ${type.name}`) }> {`${type.name}`} </span>)}</p>
                                    ) : (null)}
                                </div>
                            ) : (
                                null
                            ) 
                        }
                        </div>
    )
}

export default TypeInfo
