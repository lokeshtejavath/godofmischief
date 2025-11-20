import './App.css'
import todaysMeme from './components/meme/todaysMeme'
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing';

function App() {
  console.log(todaysMeme.memeLink);

  return (
    <>
      <div className="App">
        <NavBar />
        <Landing />
      </div>
    </>
  )
}

export default App
