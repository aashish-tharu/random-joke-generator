import { useState, useEffect } from 'react';
import axios from 'axios'
import "./App.css";

function App() {
  const [ques, setQues] = useState('');
  const [ans, setAns] = useState('');
  useEffect(()=>{
    getJokes();
  }, [])
  const getJokes = ()=>{
    axios.get('/api/getJokes')
    .then(response=>{
      let [q, a]= response.data.joke.split('?')
      setQues(q);
      setAns(a);
    })
    .catch(error=>console.log(error))
  }
  

  return (
    <div className="container">
      <div className="card">

        <div className="header">
          <span className="icon">🃏</span>
          <h1>Jokes</h1>
        </div>

        <div className="paper">
          <h2>
            {ques}
          </h2>

          <p>
            {ans}
          </p>
        </div>

        <button className="mc-btn" onClick = {getJokes}>
          ⚔ NEW JOKE
        </button>

      </div>
    </div>
  );
}

export default App;