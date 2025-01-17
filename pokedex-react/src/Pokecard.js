import React, {Component} from 'react';
import './Pokecard.css'

// const poke_api =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`
const poke_api =`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`

let padToThree = (num)=> (num <= 999 ? `00${num}`.slice(-3) : num);


class Pokecard extends Component {
    render(){
        let img = `${poke_api}${padToThree (this.props.id)}.png`
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title" >{this.props.name}</h1>
                <div className="Pokecard-image"><img src={img} alt={this.props.name} /></div>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">Exp: {this.props.exp}</div>
            </div>
        )
    }
}


export default Pokecard;