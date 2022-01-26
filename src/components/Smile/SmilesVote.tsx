import noSmile from "../../assets/icons/no-smile.svg";
import notsureSmile from "../../assets/icons/notsure-smile.svg";
import niceSmile from "../../assets/icons/nice-smile.svg";
import maybeSmile from "../../assets/icons/maybe-smile.svg";
import loveSmile from "../../assets/icons/love-smile.svg";
import { Container } from "./style";
import { useState } from "react";
import IconVote from "./IconVote";

export const icons= [
  { name: "No!", src: noSmile, value: 1 },
  { name: "Not sure", src: notsureSmile, value: 2 },
  { name: "Maybe", src: maybeSmile, value: 3 },
  { name: "Nice!", src: niceSmile, value: 4 },
  { name: "Love it!", src: loveSmile, value: 5 },
];
const SmilesVote = (props: any) => {
  const [touched, setTouched] = useState([false, false, false, false, false]);
  const onVote = (value: string) => {
    props.onVote(value);
  };
  return (
    <Container>
      {icons.map((icon: any, i) => {
        return (
          <IconVote
            key={i}
            index={i}
            src={icon.src}
            name={icon.name}
            onClick={(value: string) => onVote(value)}
            touched={touched}
            setTouched={setTouched}
          />
        );
      })}
    </Container>
  );
};
export default SmilesVote;
