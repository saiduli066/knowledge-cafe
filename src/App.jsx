import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import ShowBook from './components/showBook/GetBook'
import SideCard from './components/SideCard/SideCard'
import GetBook from './components/showBook/GetBook'
import Question from './components/Questions/Question'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App gap-2">
      <Nav />
      <div className="row">
        <div className="col-md-8">
          <GetBook />
        </div>
        <div className="col-md-4 mt-2">
          <SideCard/>
        </div>
      </div>


      <Question/>
    </div>
  );
}

export default App
