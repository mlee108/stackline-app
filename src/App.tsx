import './App.css'
import logo from './stackline_logo.svg'
import Details from './features/details/Details'
import Graph from './features/graph/Graph'
import Table from './features/table/Table'

const App = () => {
  return (
    <div className='App'>
        <header className='navbar'>
          <img src={logo} className='logo' />
        </header>
        <div className='contents'>
          <div className='card'>
            <Details />
          </div>
          <div className='data'>
            <div className='card graph'>
              <Graph />
            </div>
            <div className='card'>
              <Table />
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
