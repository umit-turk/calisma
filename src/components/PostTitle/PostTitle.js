import React from "react";
import {Link} from 'react-router-dom';
import { Container, Wrap, PostHead, Involve, ShowMore, Name } from "./postTitleStyles";
import generated from "../../api/generated.json";




const PostTitle = ({search, print}) => {

 
  
  return (
    <Container>
      <Wrap>
        { 
           print &&
          generated.filter(item => item.title.toLowerCase().includes(search.toLowerCase())) 
          .sort((a,b) => (a.title < b.title ? -1 : 1)).map((item) => (
              <Involve>
              <PostHead key={item.id}>
                {item.title}
              </PostHead>
              <Name>
              <span>{item.name + " - " + item.createdAt.slice(0, 10)}</span>
              </Name>
              <div className="line"></div>
                </Involve> 
            )) }
        <Link to="/details"><ShowMore>Show more...</ShowMore></Link>
      </Wrap>
      
    </Container>
  );
};

export default PostTitle;

