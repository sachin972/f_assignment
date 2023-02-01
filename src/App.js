import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import React, { useEffect, useState } from 'react';


function App() {
  const [searchResult, setSearchResult] = useState(null);
  useEffect(() => {
    console.log(searchResult);
  }, [searchResult])

  return (
    <div className="App">
      <Navbar searchCallback={(data) => setSearchResult(data.toLowerCase())}/>
      <Products searchResult={searchResult}/>
    </div>
  );
}

export default App;
