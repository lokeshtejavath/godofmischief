import './App.css'
import todaysMeme from './components/meme/todaysMeme'
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing';
import About from './components/About/About';

function App() {
  console.log(todaysMeme.memeLink);

  return (
    <div className="App container-fluid">
      <NavBar />
      <Landing />
      <About />
    </div>
  )
}

export default App
