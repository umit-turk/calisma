import React from 'react'
import {  Wrap } from './searchBarStyles'


const SearchBar = () => {
    return (
        
            <Wrap>
               <input placeholder="Search anything"></input>
                <button><span>Search</span></button>
            </Wrap>
        
    )
}

export default SearchBar
