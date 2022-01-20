import { useEffect, useState } from "react";
import { Vote } from "../../../types";
import BaseItem from "../BaseItem";
import { HeaderItemResult } from "../ItemResult/style";
import {
  BodyContainer,
  Border,
  CommentItem,
  CommentsContainer,
  Row,
  Square,
  SumOfVotes,
} from "./style";

export interface ItemProps {
  image: string;
  title: string;
  price: string;
  votes: Vote[];
}

const ItemVote = (props: ItemProps) => {
  const [sumOfVotes, setSumOfVotes] = useState<number>(0);
  const [sumOfComments, setSumOfComments] = useState<number>(0);
  useEffect(() => {
    let sumVotes = 0,
      sumComments = 0;
    props.votes.forEach((voteItem) => {
      sumVotes += voteItem.vote;
      voteItem.comment && sumComments++;
    });
    setSumOfVotes(sumVotes);
    setSumOfComments(sumComments);
  }, [props.votes]);

  return (
    <BaseItem>
      <BaseItem.Image {...props} />
      <BaseItem.Body>
        <HeaderItemResult>
          <BaseItem.Title {...props} />
          <BaseItem.Price {...props} />
        </HeaderItemResult>
        <BodyContainer>
          <SumOfVotes>{sumOfVotes} votes</SumOfVotes>
          {sumOfComments && <span>, {sumOfComments} comments</span>}
          <CommentsContainer>
            <Border />
            {props.votes.map((itemVote, index) => {
              return (
                <Row key={index}>
                  <Square />
                  <CommentItem>{itemVote.comment}</CommentItem>
                </Row>
              );
            })}
          </CommentsContainer>
        </BodyContainer>
      </BaseItem.Body>
    </BaseItem>
  );
};
export default ItemVote;
