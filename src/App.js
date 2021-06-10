import React, {  useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Details from './components/Details/Details';
//import generated from '../src/api/generated.json';
import PostTitle from './components/PostTitle/PostTitle';

const App = () => {

  const [search, setSearch] = useState('');
  const [print, setPrint] = useState(false);

 const getData = (event) => {
   setSearch(event.target.value)
   setPrint(false);
   //setNewPrint(false);
    console.log(event.target.value)
  }


  

  return (
    <Router>
    <div className="App">
      <Route exact path="/">
        <Header />
        <SearchBar  search={search} getData={getData} print={print} setPrint={setPrint}/>
        <PostTitle search={search} print={print} setPrint={setPrint}/>
      </Route>
      <Route path="/details">
        <Details search={search} getData={getData} print={print} setPrint={setPrint}></Details>
      </Route>
    </div>
    </Router>
  )
}

export default App
