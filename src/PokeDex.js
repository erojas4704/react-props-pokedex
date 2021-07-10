import defaults from "./defaultPokemon"
import PokeCard from "./PokeCard"
import "./PokeDex.css"

const PokeDex = ({
    pokemon = defaults
}) => {
    return (
        <div>
            <h3 className="center poke-heading">PokeDex</h3>
            <div className="center poke-dex">
                {pokemon.map(p => {
                    return <PokeCard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
                })}
            </div>
        </div>
    )
};

export default PokeDex;