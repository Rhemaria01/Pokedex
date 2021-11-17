import React from 'react'

const Stats = ({pokemon}) => {
    return (
        <div >
            <h2 className="text-secondary fw-bold">Base Stats</h2>
                    
                    <h4 className="text-success">HP</h4>
                    <div className="progress mb-2">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: `${(pokemon.stats[0].base_stat/2)}%`}}  aria-valuemax="100"></div>
                    </div>
                    <h4 className="text-info">Attack</h4>
                    <div className="progress mb-2">
                        <div className="progress-bar bg-info" role="progressbar" style={{width: `${(pokemon.stats[1].base_stat/2)}%`}}  aria-valuemax="100"></div>
                    </div>
                    <h4 className="text-warning">Defense</h4>
                    <div className="progress mb-2">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: `${(pokemon.stats[2].base_stat/2)}%`}}  aria-valuemax="100"></div>
                    </div>
                    <h4 className="text-danger">Sp. Attack</h4>
                    <div className="progress mb-2">  
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: `${(pokemon.stats[3].base_stat/2)}%`}}  aria-valuemax="100"></div>
                    </div>
                    <h4 className="text-dark">Sp. Defense</h4>
                    <div className="progress mb-2">
                        <div className="progress-bar bg-dark" role="progressbar" style={{width: `${(pokemon.stats[4].base_stat/2)}%`}}  aria-valuemax="100"></div>
                    </div>
                    <h4 className="text-primary">Speed</h4>
                    <div className="progress mb-2">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: `${(pokemon.stats[5].base_stat/2)}%`}}  aria-valuemax="100"></div>
                    </div>
                    <h4 className="badge bg-secondary fs-5">Overall</h4>
                    <div className="progress mb-2">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: `${(pokemon.stats[0].base_stat/8)}%`}}  aria-valuemax="100"></div>
                    <div className="progress-bar bg-info" role="progressbar" style={{width: `${(pokemon.stats[1].base_stat/8)}%`}}  aria-valuemax="100"></div>
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: `${(pokemon.stats[2].base_stat/8)}%`}}  aria-valuemax="100"></div>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: `${(pokemon.stats[3].base_stat/8)}%`}}  aria-valuemax="100"></div>
                    <div className="progress-bar bg-dark" role="progressbar" style={{width: `${(pokemon.stats[4].base_stat/8)}%`}}  aria-valuemax="100"></div>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: `${(pokemon.stats[5].base_stat/8)}%`}}  aria-valuemax="100"></div>
                    </div>
        </div>
    )
}

export default Stats
