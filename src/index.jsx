import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const container = document.getElementById('root')
const api = 'https://api.opendota.com/api/';

class API extends Component {
    state = {
        data: [],
        isFetch: true
    }

    componentDidMount() {
        /* Consulta al ID */
        fetch(api + 'players/338324299')
            .then(response => response.json())
            .then(info => this.setState({data:info,isFetch:false}))
    }

    render() {
        /* Montando información */
        if (this.state.isFetch) {
            return 'Loading...'
        }
        
        const estado = this.state.data
        return(
            <div>
                <p>Nombre: {estado.profile.personaname} </p>
                <p>Pais: {estado.profile.loccountrycode} </p>
                <p>Imagen <img src={estado.profile.avatarfull} alt=""/></p>
                <a href={estado.profile.profileurl} target='blank'>Cuenta de Steam: {estado.profile.personaname}</a>
            </div>
        )

    }
}

ReactDOM.render(
    <div>
        <API />
        <small>Información sacada de OpenDota</small>
    </div>, container)