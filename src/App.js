import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Movie from './MoviesPage/SingleMovie'

function App() {
  return <Switch>
    <Route path='/' exact>
<Home />
    </Route>
    <Route path='/movies/:id' children={<Movie />}>
{/* //<Movie /> reomove children */}
    </Route>
    
    </Switch>
}

export default App
