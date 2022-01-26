import { ImageItem, Container, Price, Title, Body } from "./style";

const shortTitle = (text: string, max: number) => {
  return text && text.length > max
    ? text.slice(0, max).split(" ").slice(0, -1).join(" ")
    : text;
};

const BaseItem = (props: any) => {
  return <Container>{props.children}</Container>;
};
BaseItem.Body = function BaseItemBody(props: any) {
  return <Body>{props.children}</Body>;
};
BaseItem.Title = function BaseItemTitle(props: any) {
  return <Title>{shortTitle(props.title, 30)}</Title>;
};
BaseItem.Image = function BaseItemImage(props: any) {
  return <ImageItem src={props.image} />;
};
BaseItem.Price = function BaseItemPrice(props: any) {
  return <Price>{props.price}</Price>;
};

export default BaseItem;
