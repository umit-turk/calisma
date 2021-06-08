import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import PostTitle from './components/PostTitle/PostTitle';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <PostTitle />
    </div>
  )
}

export default App
