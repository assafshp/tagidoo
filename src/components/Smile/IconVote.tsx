import { Icon, Col } from "./style";

const IconVote = (props: any) => {
  const changeColor = () => {
    props.touched[props.index] = !props.touched[props.index];
    props.touched.forEach((smile: any, i: any) => {
      if (i !== props.index) {
        props.touched[i] = false;
      }
    });
    props.setTouched(new Array(...props.touched));
    props.touched[props.index] ? props.onClick(props.name) : props.onClick("");
  };
  return (
    <Col>
      <Icon
        src={props.src}
        onClick={changeColor}
        style={
          props.touched[props.index]
            ? { border: "3px solid #00A9FF", borderRadius: "50%" }
            : { border: "none" }
        }
      />
      <p>{props.name}</p>
    </Col>
  );
};
export default IconVote;
