import BaseItem from "../BaseItem";
import cartIcon from "../../../assets/icons/cart.svg";
import {
  Icon,
  AddComment,
  Voting,
  InputValue,
  InputContainer,
  Input,
} from "./style";
import { HeaderItemInit, IconButton } from "../style";
import { useState } from "react";
import { Row } from "../ItemVote/style";
import Smiles from "../../Smile/Smiles";

export interface ItemProps {
  image: string;
  title: string;
  price: string;
  onAddVotingValue: (value: string) => void;
  onAddComment: (comment: string) => void;
}
const ItemResult = (props: ItemProps) => {
  const [commentValue, setCommentValue] = useState<string>("");
  const [votingValue, setVotingValue] = useState<string>("");

  const commentChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setCommentValue(e.currentTarget.value);
    props.onAddComment(e.currentTarget.value);
  };
  const voteChangeHandler = (value: string) => {
    setVotingValue(value);
    props.onAddVotingValue(value);
  };
  return (
    <BaseItem>
      <BaseItem.Image {...props} />
      <BaseItem.Body>
        <Row>
          <HeaderItemInit>
            <BaseItem.Title {...props} />
            <BaseItem.Price {...props} />
          </HeaderItemInit>
          <Icon src={cartIcon} />
        </Row>
        <Smiles onVote={voteChangeHandler} />
        <InputContainer>
          <Input
            placeholder="Add a comment"
            type="text"
            value={commentValue}
            onChange={commentChangeHandler}
          ></Input>
        </InputContainer>
      </BaseItem.Body>
    </BaseItem>
  );
};
export default ItemResult;
