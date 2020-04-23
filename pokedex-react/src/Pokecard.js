import React, {Component} from 'react';
import './Pokecard.css'

const poke_api =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`


class Pokecard extends Component {
    render(){
        let img = `${poke_api}${this.props.id}.png`
        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={img} alt={this.props.name} />
                <div>Type: {this.props.type}</div>
                <div>Exp: {this.props.exp}</div>
            </div>
        )
    }
}


export default Pokecard;