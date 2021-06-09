import React from "react";
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
  Modal
} from "./detailStyles";
import {Link} from 'react-router-dom'
import generated from "../../api/generated.json";
import Pagination from "../Pagination/Pagination";

const Details = () => {
  return (
    <Container>
      <Wrap>
        <Link to="/">
        <NewLogo>
          <img src="/images/logo.svg" alt="logo" />
        </NewLogo>
        </Link>
        <SearchArea>
          <input placeholder="something" />
        </SearchArea>
        <Button>
          <button>Search</button>
        </Button>
      </Wrap>
      <Orders>
        <Icon>
          <img src="/images/icon.svg" alt="icon" />
        </Icon>
        <Order>OrderBy</Order>
      </Orders>
      <Modal>
          <ul>
            <li>Name ascending</li>
            <li>Name descending</li>
            <li>Year ascending</li>
            <li>Year descending</li>
          </ul>
      </Modal>
      <BigDetails>
      {generated &&
          generated
            .filter((item, index) => index < 7)
            .map((item, index) => (
                <Involve>
              <PostHead key={item.id}>
                {item.title}
              </PostHead>
              <Name>
              <span>{item.name + " - " + item.createdAt.slice(0, 10)}</span>
              </Name>
              <div className="line"></div>
                </Involve>
            ))}
      </BigDetails>
      <Pagination />
    </Container>
  );
};

export default Details;