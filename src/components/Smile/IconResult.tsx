import { Icon, Col } from "./style";

const IconVote = (props: any) => {
  return (
    <Col>
      <Icon
        src={props.src}
        style={props.filter ? { filter: "grayscale(1)" } : { filter: "" }}
      />
      <p>{props.name}</p>
    </Col>
  );
};
export default IconVote;
