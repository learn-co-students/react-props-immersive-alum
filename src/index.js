import React from 'react'
import ReactDOM from 'react-dom'
import MovieCard from './MovieCard'

const App = () => (
  <div>
    <MovieCard
      title='Mad Max: Fury Road'
      poster='http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
      genres={['Action', 'Adventure', 'Science Fiction', 'Thriller']}
     />
  </div>
)

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)