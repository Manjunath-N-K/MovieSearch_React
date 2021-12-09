import React from 'react'
import { useGlobalContext } from '../Hooks/context'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

const SearchForm = () => {
  const {query,setQuery,error}=useGlobalContext();
  const handleSubmit=(e)=>{
    e.preventDefault();
    toast.success(`You have searched for '${query}'`);
    
  }
  

  return (<form className='search-form' onSubmit={handleSubmit}>
    <h2>search movies</h2>
    <input type='text' className='form-input' 
    value={query} onChange={(e)=>setQuery(e.target.value)} />
    {error.show && <div className='error'>{error.msg}</div>}
    </form>)
}

export default SearchForm
