import { icons } from "../Smile/SmilesVote";
import { Col, Icon } from "../Smile/style";
import {
  Column,
  CommentsContainer,
  DropdownContainer,
  VoteRow,
  VotesContainer,
  SmallIcon,
} from "./style";

const Dropdown = (props: any) => {
  return (
    <DropdownContainer>
      <VotesContainer>
        {icons.map((icon) => {
          return (
            <Column>
              <Col>
                <p>{icon.name}</p>
                <Icon src={icon.src}></Icon>
              </Col>
              {props.votes.map((el: any) => {
                return el.vote === icon.name && <p>{el.voterName}</p>;
              })}
            </Column>
          );
        })}
      </VotesContainer>
      <CommentsContainer>
        {props.votes.map((el: any) => {
          return (
            el.vote && (
              <VoteRow>
                <SmallIcon
                  src={icons.find(({ name }) => name === el.vote)?.src}
                ></SmallIcon>
                <p>{`${el.voterName}: "${el.comment}"`}</p>
              </VoteRow>
            )
          );
        })}
      </CommentsContainer>
    </DropdownContainer>
  );
};
export default Dropdown;
