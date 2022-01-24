import noSmile from "../../assets/icons/no-smile.svg";
import notsureSmile from "../../assets/icons/notsure-smile.svg";
import niceSmile from "../../assets/icons/nice-smile.svg";
import maybeSmile from "../../assets/icons/maybe-smile.svg";
import loveSmile from "../../assets/icons/love-smile.svg";
import { Icon, Col, Container } from "./style";
import { useState } from "react";
import SmileIcon from "./SmileIcon";

const icons = [
  { name: "No!", src: noSmile },
  { name: "Not sure", src: notsureSmile },
  { name: "Maybe", src: maybeSmile },
  { name: "Nice!", src: niceSmile },
  { name: "Love it!", src: loveSmile },
];
const Smiles = (props: any) => {
  const onVote = (value: string) => {
    props.onVote(value);
  };
  return (
    <Container>
      {icons.map((icon: any, i) => {
        return (
          <SmileIcon
            filter={props.result ? props.result : false}
            key={i}
            src={icon.src}
            name={icon.name}
            onClick={(value: string) => onVote(value)}
          />
        );
      })}
    </Container>
  );
};
export default Smiles;
