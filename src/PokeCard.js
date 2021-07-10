import './PokeCard.css';

const PokeCard = ({ name, type, base_experience, id }) => {
    const img_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <span class="poke-card">
            <div className="pokemon-name">{name}</div>
            <img src={img_url} alt={`${name}.`}></img>
            <div>Type: {type}</div>
            <div>EXP: {base_experience}</div>
        </span>
    );
}

export default PokeCard;