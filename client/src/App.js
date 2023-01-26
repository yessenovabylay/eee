import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react' 
import axios from 'axios'

function App() {
  const makeApiRequest = () => {
    console.log("makeApiRequest")
  };

  const [test, setTest] = useState([])
  
  const login = async() =>{
    try{

      const res = await axios.get('/api/testwithcurrentuser' )
      
      setTest(res.data)
      console.log(res.data)

    } catch (error){
      console.log(error)
    }
  }

  const didMount = () => {
    login();
  }

  useEffect(didMount, [])

  const testList = test.map(item => (
  <div> 
    <h1>{item.id}</h1> 
    <h1>{item.email}</h1> 
  </div>
    ))

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> dev to sddssd.

        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div>{testList}</div>
        
      </header>
      <button onClick={makeApiRequest}>Make api request</button>
    </div>
  );
}

export default App;
