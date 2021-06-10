import React, { useState, useEffect } from "react";
import {
  NewLogo,
  Container,
  Wrap,
  SearchArea,
  Button,
  Icon,
  Order,
  Orders,
  BigDetails,
  PostHead,
  Name,
  Involve,
  Modal,
} from "./detailStyles";
import { Link } from "react-router-dom";
import generated from "../../api/generated.json";
import Pagination from "../Pagination/Pagination";

const Details = ({search, getData, setPrint, print}) => {

/*   const[newPrint, setNewPrint] = useState(false); */
  const [show, setShow] = useState(false)

 /*  const handlePost = () => {
    setShow(!newPrint);
  }
 */
 /*  const NameOrder = () =>  generated.sort(function (a, b) {
      if(a.title.toLowerCase() < b.title.toLowerCase()
      ) return -1;
      if(a.title.toLowerCase() > b.title.toLowerCase()
      ) return 1 ;
      return 0;
    }); */

    /* const NameOrder = generated.sort((a,b) => (a.title < b.title ? 1 : -1)) */
    //const YearOrder = generated.sort((a,b) => (a.createdAt < b.createdAt ? -1 : 1))

  /* const TimeOrder = () => generated.sort(function (a, b) {
      if(a.createdAt < b.createdAt)
      return -1;
      if(a.createdAt > b.createdAt)
      return 1;
      return 0;
  }); */


  const handleClick = () => {
    setShow(!show);
  }

  

  
  return (
    <Container>
      <Wrap>
        <Link to="/">
          <NewLogo>
            <img src="/images/logo.svg" alt="logo" />
          </NewLogo>
        </Link>
        <SearchArea>
          <input
          onChange={getData}
          value={search}
          placeholder="something" />
        </SearchArea>
        <Button>
          <button onClick={()=> setPrint(true)}>Search</button>
        </Button>
      </Wrap>
      <Orders>
        <Icon>
          <img src="/images/icon.svg" alt="icon" />
        </Icon>
        <Order onClick={handleClick}>OrderBy</Order>
      </Orders>
      {show ? (<Modal >
        <ul>
          <li >Name ascending</li>
          <li >Name descending</li>
          <li >Year ascending</li>
          <li >Year descending</li>
        </ul>
      </Modal>) : null}
      
      
       
       <BigDetails>
        
        {  print && 
          generated.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
         .map((item) => (
              <Involve>
                
                <PostHead key={item.id}>{item.title}</PostHead> 
                
                <Name>
                  <span>{item.name + " - " + item.createdAt.slice(0, 10)}</span>
                </Name> 
                
                <div className="line"></div>
              </Involve>
            ))}
      </BigDetails>  
      <Pagination generated={generated}/>
    </Container>
  );
};

export default Details;



//.sort((a,b) => (a.title < b.title ? 1 : -1)) Name descending
//.sort((a,b) => (a.title < b.title ? -1 : 1)) Name ascending

//.sort((a,b) => (a.createdAt < b.createdAt ? 1 : -1)) Year descending
//.sort((a,b) => (a.createdAt < b.createdAt ? -1 : 1)) Year ascending

// onClick={()=> setNewPrint(true)}