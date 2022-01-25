
import {
  Container,
  Body,
  Title,
  Subtitle,
  Header,
  Footer,
  SquareButton,
} from "./style";

const BasePage = (props: any) => {
  return <Container>{props.children}</Container>;
};

BasePage.Body = function BasePageBody(props: any) {
  return <Body>{props.children}</Body>;
};
BasePage.Header = function BasePageHeader(props: any) {
  return <Header>{props.children}</Header>;
};

BasePage.Title = function BasePageTitle() {
  return <Title>Tagidoo</Title>;
};
BasePage.Subtitle = function BasePageSubtitle(props: any) {
  return <Subtitle>{props.children}</Subtitle>;
};
BasePage.Footer = function BasePageFooter(props: any) {
  return <Footer>{props.children}</Footer>;
};
BasePage.Button = function BasePageButton(props: any) {
  return <SquareButton {...props}>{props.children}</SquareButton>;
};

export default BasePage;
