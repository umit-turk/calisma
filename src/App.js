import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Details from './components/Details/Details';
//import generated from '../src/api/generated.json';
import PostTitle from './components/PostTitle/PostTitle';

const App = () => {

  const [search, setSearch] = useState('');


 const handleChange = (event) => setSearch(event.target.value);


  return (
    <Router>
    <div className="App">
      <Route exact path="/">
        <Header />
        <SearchBar search={search} onSearchChange={handleChange}/>
        <PostTitle search={search} />
      </Route>
      <Route path="/details">
        <Details></Details>
      </Route>
    </div>
    </Router>
  )
}

export default App
