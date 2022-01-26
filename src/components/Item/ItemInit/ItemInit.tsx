import { ButtonProps } from "../../Button/Button";
import BaseItem from "../BaseItem";
import { HeaderItemInit } from "../style";
import { ButtonItem } from "./style";

export interface ItemProps {
  image: string;
  title: string;
  price: string;
  button: ButtonProps;
}
const ItemInit = (props: ItemProps) => {
  return (
    <BaseItem>
      <ButtonItem {...props.button} />
      <BaseItem.Image {...props} />
      <BaseItem.Body>
        <HeaderItemInit>
          <BaseItem.Title {...props} />
          <BaseItem.Price {...props} />
        </HeaderItemInit>
      </BaseItem.Body>
    </BaseItem>
  );
};
export default ItemInit;
