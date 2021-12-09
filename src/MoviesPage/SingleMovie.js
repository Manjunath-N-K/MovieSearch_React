import { makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from '../Hooks/context'
import useFetch from '../components/useFetch';

const SingleMovie = () => {
  const classes=useStyle();
  const {id}=useParams();
  const {isLoading,error,data:movie}=useFetch(`i=${id}`);
  const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'


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
  <section className={classes.single_movie} >
<img src={poster ==='N/A' ? url:poster}  alt={title} className='single-movie-img'/>
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


const useStyle=makeStyles((theme)=>({
  single_movie:{
    width:'90vw',
    maxWidth:'var(--max-width)',
    margin:'4rem auto',
    display:'grid',
    gap:'2rem',
    [theme.breakpoints.up('md')]:{
      
      gridTemplateColumns:'1fr 2fr'
    }
  }
}))

export default SingleMovie
