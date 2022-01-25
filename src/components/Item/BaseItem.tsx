import { ImageItem, Container, Price, Title, Body } from "./style";

const BaseItem = (props: any) => {
  return <Container>{props.children}</Container>;
};
BaseItem.Body = function BaseItemBody(props: any) {
  return <Body>{props.children}</Body>;
};
BaseItem.Title = function BaseItemTitle(props: any) {
  return <Title>{props.title}</Title>;
};
BaseItem.Image = function BaseItemImage(props: any) {
  return <ImageItem src={props.image} />;
};
BaseItem.Price = function BaseItemPrice(props: any) {
  return <Price>{props.price}</Price>;
};

export default BaseItem;
