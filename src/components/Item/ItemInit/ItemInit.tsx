import { ButtonProps } from "../../Button/Button";
import BaseItem from "../BaseItem";
import { HeaderItem } from "../style";
import { ButtonItem, BodyInitItem } from "./style";

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
      <BodyInitItem>
        <HeaderItem>
          <BaseItem.Title {...props} />
          <BaseItem.Price {...props} />
        </HeaderItem>
      </BodyInitItem>
    </BaseItem>
  );
};
export default ItemInit;
