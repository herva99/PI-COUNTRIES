import { Route, Routes } from 'react-router-dom'

import Home from './views/home/home'
import Detail from './views/detail/detail'
import Create from './views/create/create'


import './App.css'


function App() {

  return (

      <div>
        <Routes>
          <Route path='/home' Component={Home}/>
          <Route path='/home/:id' Component={Detail}/>
          <Route path='/create' Component={Create}/>
        </Routes>
      </div>

  )
}

export default App;
