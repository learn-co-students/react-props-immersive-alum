import React, { Component } from 'react'

class MovieCard extends Component {
  render () {
    return(
      <div className="movie-card">
        <img 
          src={this.props.poster} 
          alt="Mad Max: Fury Road"/>
        <h2>{this.props.title}</h2>
        <small>{this.props.genres.join(', ')}</small>
      </div>
    )
  }
}

MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
}

export default MovieCard