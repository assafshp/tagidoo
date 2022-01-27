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
        {icons.map((icon,i) => {
          return (
            <Column key={i}>
              <Col style={{paddingBottom: '10px'}}>
                <p style={{paddingBottom: '10px'}}>{icon.name}</p>
                <Icon src={icon.src}></Icon>
              </Col>
              {props.votes.map((el: any,i:number) => {
                return el.vote === icon.name && <p key={i}>{el.voterName}</p>;
              })}
            </Column>
          );
        })}
      </VotesContainer>
      <CommentsContainer>
        {props.votes.map((el: any,i:number) => {
          return (
            el.vote && (
              <VoteRow style={{paddingTop: '10px'}} key={i}>
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
