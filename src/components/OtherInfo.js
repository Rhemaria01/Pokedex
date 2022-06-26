import React from 'react'

const OtherInfo = ({pokemon,pokeSpecies}) => {

    return (
        <div>
            <h2 className="text-secondary fw-bold">Other Info</h2>
                <span className="badge bg-danger float-start fs-4 mt-2">{`Height: ${pokemon.height/10}m`}</span>
                <span className="badge bg-primary float-start fs-4 mt-2">{`Weight: ${pokemon.weight/10}kg`}</span>
                <span className="badge bg-success float-start fs-4 mt-2 text-capitalize">{`Growth Rate: ${pokeSpecies.growth_rate?.name}`}</span>
                <span className="badge bg-dark float-start fs-4 mt-2 text-capitalize">{`Egg Groups: ${pokeSpecies.egg_groups?.map(group => group.name).join(', ')}`}</span>
                <span className="badge bg-secondary float-start fs-4 mt-2">{`Gen: ${pokeSpecies.generation?.name}`}</span>
        </div>
    )
}

export default OtherInfo
