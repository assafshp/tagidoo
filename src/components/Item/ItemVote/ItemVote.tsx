import { useEffect, useState } from "react";
import { Vote } from "../../../types";
import Smiles from "../../Smile/Smiles";
import BaseItem from "../BaseItem";
import { HeaderItemInit } from "../style";
import {
  BodyContainer,
  CommentItem,
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
  const [comment, setComment] = useState("");

  useEffect(() => {
    let sumVotes = 0,
      sumComments = 0;
    props.votes && props.votes.forEach((voteItem) => {
      voteItem.vote && sumVotes++;
      voteItem.comment && sumComments++;
      if(voteItem.comment && !comment) setComment(voteItem.comment)
    });
    setSumOfVotes(sumVotes);
    setSumOfComments(sumComments);
  }, [props.votes]);

  return (
    <BaseItem>
      <BaseItem.Image {...props} />
      <BaseItem.Body>
        <HeaderItemInit>
          <BaseItem.Title {...props} />
          <BaseItem.Price {...props} />
        </HeaderItemInit>
        <BodyContainer>
          <Smiles/>
          <Row>
            <SumOfVotes>{sumOfVotes} votes</SumOfVotes>
            {sumOfComments > 0 && <span>, {sumOfComments} comments</span>}
          </Row>
          {sumOfComments === 0 ?
            <CommentItem>No Comments</CommentItem> : 
            <CommentItem>{comment}</CommentItem>
          }
        </BodyContainer>
      </BaseItem.Body>
    </BaseItem>
  );
};
export default ItemVote;
