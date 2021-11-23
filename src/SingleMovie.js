import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import useFetch from './useFetch';

const SingleMovie = () => {
  const {id}=useParams();
  const {isLoading,error,data:movie}=useFetch(`i=${id}`);

if(isLoading){
  return <div className='loading'> Loading</div>
}
if(error.show ){
  return <div className='page-error'>
    <h1>{error.msg}</h1>
    <Link  to='/' className='btn'>back to home</Link>
  </div>
}


const {Poster:poster,Title:title,Plot:plot,Year:year}=movie;
return (
  <section className='single-movie'>
<img src={poster} alt={title}/>
<div className='single-movie-info'>
<h2>{title}</h2>
<p>{plot}</p>
<h4>{year}</h4>
<Link to='/' className='btn'> Back to Home</Link>
</div>
  </section>
)

  return <h2>single movie</h2>
}

export default SingleMovie
