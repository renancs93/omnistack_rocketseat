import React, { Component } from 'react';
import api from '../services/api';

import twitterLogo from '../twitter.svg'
import './Timeline.css'

import Tweet from '../components/Tweet';

export default class Timeline extends Component {
  
  state = {
    tweets: [],
    newTweet:'',
  };
  
  //Chamada da API que retorna todos os tweets
  async componentDidMount(){
    const response = await api.get('tweets');

    this.setState({ tweets: response.data });
  };

  handleInputChange = e =>{
    this.setState({ newTweet: e.target.value });
  };

  handleNewTweet = async e => {
    if ( e.keyCode !== 13 ) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem("@Omnistack:username");

    await api.post('tweets', { content, author });

    this.setState({ newTweet: "" });
  };

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt="GoTwiiter" />

        <form>
          <textarea 
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo?"
          />
        </form>

        {/* Listagem dos Tweets numa lista */}
        <ul className="tweet-list">
          { this.state.tweets.map(tweet => (
              <Tweet key={tweet._id} tweet={tweet}/>
          ))}
        </ul>

      </div>
    );
  }
}
