import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './Header'
function App() {
  let firstname='mathews';
  return(
    <div className="App">
        <Header names={["maths","chem"]} items={['item1','item2']}/>
</div>
  )
   
  
}

export default App;
