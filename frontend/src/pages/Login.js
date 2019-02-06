import React, { Component } from 'react';

import twitterLogo from '../twitter.svg'
import './Login.css';

export default class Login extends Component {
  
    state = {
        username:'',
    };

    //Evento de alteração do estado do campo Username
    handleInputChange = e => {
        this.setState({username: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault(); //evita qualquer evento padrão do Form

        const { username } = this.state;

        if(!username.length) return;

        localStorage.setItem('@Omnistack:username', username);

        this.props.history.push('/Timeline');
    }

    render() {
    return (
        <div className="login-wrapper">
            <img src={twitterLogo} alt="GoTwitter"/>
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="Nome do Usuário"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
  }
}
