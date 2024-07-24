import React from 'react'
import ReactDOM from 'react-dom/client'
import { Like } from './components/Like'
import { NavBar } from './components/NavBar'
import { Dislike } from './components/Dislike'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Like textBtn="Like"/>
    <Dislike textBtn="Dislikee"/>
  </React.StrictMode>,
)
