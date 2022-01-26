import { useEffect, useState } from "react";
import { Vote } from "../../../types";
import Dropdown from "../../Dropdown/Dropdown";
import SmilesResults from "../../Smile/SmilesResult";
import BaseItem from "../BaseItem";
import dropdownIcon from "../../../assets/icons/downIcon.svg";
import { HeaderItemInit } from "../style";
import {
  BodyContainer,
  CommentItem,
  ImageContainer,
  Image,
  ImageTitle,
  Row,
  SumOfVotes,
  ButtonDropdown,
} from "./style";

export interface ItemProps {
  image: string;
  title: string;
  price: string;
  votes: Vote[];
}
export const smiles = [
  { name: "No!", value: 0 },
  { name: "Not sure", value: 1 },
  { name: "Maybe", value: 2 },
  { name: "Nice!", value: 3 },
  { name: "Love it!", value: 4 },
];
const ItemVote = (props: ItemProps) => {
  const [sumOfVotes, setSumOfVotes] = useState<number>(0);
  const [avrerageVotes, setAverageVotes] = useState(0);
  const [sumOfComments, setSumOfComments] = useState<number>(0);
  const [comment, setComment] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    let sumVotes = 0,
      sumComments = 0,
      averageVotes = 0;
    props.votes &&
      props.votes.forEach((voteItem: any) => {
        const smile = smiles.find(({ name }) => name === voteItem.vote);
        if (smile) {
          averageVotes += smile.value;
        }
        voteItem.vote && sumVotes++;
        voteItem.comment && sumComments++;
        if (voteItem.comment && !comment) setComment(voteItem.comment);
      });
    setAverageVotes(Math.round((averageVotes /= sumVotes)));
    setSumOfVotes(sumVotes);
    setSumOfComments(sumComments);
  }, [props.votes]);

  return (
    <BaseItem>
      <ImageContainer>
        <Image src={props.image}></Image>
        <ImageTitle>
          {smiles.find(({ value }) => value === avrerageVotes)?.name}
        </ImageTitle>
      </ImageContainer>

      <BaseItem.Body>
        <HeaderItemInit>
          <BaseItem.Title {...props} />
          <BaseItem.Price {...props} />
        </HeaderItemInit>
        <BodyContainer>
          <SmilesResults result={avrerageVotes} />
          <Row>
            <SumOfVotes>{sumOfVotes} votes</SumOfVotes>
            {sumOfComments > 0 && <span>, {sumOfComments} comments</span>}
          </Row>
          {sumOfComments === 0 ? (
            <CommentItem>No Comments</CommentItem>
          ) : (
            <CommentItem>{comment}</CommentItem>
          )}
          <ButtonDropdown
            src={dropdownIcon}
            onClick={() => setShowDropdown(!showDropdown)}
          ></ButtonDropdown>
        </BodyContainer>
        {showDropdown && <Dropdown votes={props.votes} />}
      </BaseItem.Body>
    </BaseItem>
  );
};
export default ItemVote;
