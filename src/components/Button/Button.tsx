import { useState } from "react";
import checkIcon from "../../assets/icons/Checkbox.svg";
import "./style";
import { ButtonStyled, Icon } from "./style";
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  addOrRemove: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const [touched, setTouched] = useState<Boolean>(false);
  const changeColor = () => {
    setTouched(!touched);
    props.addOrRemove();
  };

  return (
    <ButtonStyled
      onClick={changeColor}
      {...props}
    >
      {touched && <Icon src={checkIcon} />}
    </ButtonStyled>
  );
};

export default Button;
