import React from "react";
import { Container, Wrap, PostHead, ShowMore } from "./postTitleStyles";
import generated from "../../api/generated.json";

const PostTitle = () => {
  console.log(generated);
  return (
    <Container>
      <Wrap>
        {generated &&
          generated
            .filter((item, index) => index < 3)
            .map((item, index) => (
              <PostHead key={item.id}>
                {item.title}
                <span>{item.name + " - " + item.createdAt.slice(0, 10)}</span>
              </PostHead>
            ))}
        <ShowMore>Show more...</ShowMore>
      </Wrap>
    </Container>
  );
};

export default PostTitle;
