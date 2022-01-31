import BaseItem from "../BaseItem";
import cartIcon from "../../../assets/icons/cart.svg";
import {
  Icon,
  InputContainer,
  Input,
} from "./style";
import { HeaderItem } from "../style";
import { useState } from "react";
import { Row } from "../ItemResult/style";
import SmilesVote from "../../Smile/SmilesVote";

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
          <HeaderItem>
            <BaseItem.Title {...props} />
            <BaseItem.Price {...props} />
          </HeaderItem>
          <Icon src={cartIcon} />
        </Row>
        <SmilesVote onVote={voteChangeHandler} />
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
