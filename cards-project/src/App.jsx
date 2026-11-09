import Card from './components/card.jsx'
import './App.css'
import Jobs from './components/jobs.jsx'

function App() {
  return (
    <div className="app">
      <div className="card-container">
        {Jobs.map((ele, idx)=>{
          return(
            <div key={idx}>
              <Card data = {ele} />
            </div>
          ) 
        })}
      </div>
    </div>
  )
}

export default App
