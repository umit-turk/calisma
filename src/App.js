import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import PostTitle from './components/PostTitle/PostTitle';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Details from './components/Details/Details';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Route exact path="/">
        <Header />
        <SearchBar />
        <PostTitle />
      </Route>
      <Route path="/details">
        <Details></Details>
      </Route>
    </div>
    </Router>
  )
}

export default App
