import React, { useState } from "react";
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
  
  const [show, setShow] = useState(false)

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
          <li>Name ascending</li>
          <li>Name descending</li>
          <li>Year ascending</li>
          <li>Year descending</li>
        </ul>
      </Modal>) : null}
      <BigDetails>
        {print &&
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
