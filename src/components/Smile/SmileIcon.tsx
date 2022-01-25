import { useState } from "react";
import { Icon, Col } from "./style";

const SmileIcon = (props: any) => {
  const [touched, setTouched] = useState(false);
  const changeColor = () => {
    setTouched(!touched);
    !touched ? props.onClick(props.name) : props.onClick("");
  };
  return (
    <Col>
      <Icon
        src={props.src}
        onClick={changeColor}
        style={
          touched
            ? { border: "2px solid #00A9FF", borderRadius: "50%" }
            : { border: "none" }
        }
      />
      <p>{props.name}</p>
    </Col>
  );
};
export default SmileIcon;
