import React from 'react'
import { useGlobalContext } from '../Hooks/context'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const classes=useStyles();
  const {movies,isLoading}=useGlobalContext();
  if(isLoading){
    return <div className="loading"></div>
  }
  return <section className={classes.movies}>
    {
       movies.map((movie)=>{
         const {imdbID:id,Poster:poster,Title:title,Year,year}=movie;
return (
 <Link to={`/movies/${id}`} key={id} className='movie'>
   <article>
     <img src={poster ==='N/A' ? url:poster} alt={title}></img>
     <div className='movie-info'>
<h4 className='title'> {title}</h4>
<p>{year}</p>
     </div>
   </article>
 </Link>
)

       })
    }
   
   
   </section>
}


const useStyles=makeStyles((theme)=>({
  movies:{
    width:'90vw',
    display:'grid',
    gap:'2rem',
    margin:'0 auto',
    paddingBottom:'5rem',
    paddingTop:'3rem',
    maxWidth:'var(--max-width)',
//     [theme.breakpoints.up('sm')]:{
//       display:'grid',
//        gridTemplateColumns:'repeat(2,1fr)',
//   },
//   [theme.breakpoints.up('md')]:{
//     display:'grid',
//      gridTemplateColumns:'repeat(3,1fr)',
// },
// [theme.breakpoints.up('lg')]:{
//   display:'grid',
//    gridTemplateColumns:'repeat(4,1fr)',
// }

[theme.breakpoints.up('sm')]:{
  display:'grid',
   gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))',
}
  }
}))


export default Movies
