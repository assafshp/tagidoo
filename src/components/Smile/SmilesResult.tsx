import IconResult from "./IconResult";
import { icons } from "./SmilesVote";
import { Container } from "./style";

const SmilesResults = (props: any) => {
  return (
    <Container>
      {icons.map((icon: any, index) => {
        return (
          <IconResult
            filter={props.result !== index ? true : false}
            key={index}
            src={icon.src}
            name={icon.name}
          />
        );
      })}
    </Container>
  );
};
export default SmilesResults;
