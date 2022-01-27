import logo from "../assets/icons/TAGIDOO_E-03.svg";

import {
  Container,
  Body,
  Subtitle,
  Header,
  Footer,
  SquareButton,
  IconBtn,
  TitleContainer,
  Logo,
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
  return (
    <TitleContainer>
      <Logo src={logo}></Logo>
    </TitleContainer>
  );
};
BasePage.Subtitle = function BasePageSubtitle(props: any) {
  return <Subtitle>{props.children}</Subtitle>;
};
BasePage.Footer = function BasePageFooter(props: any) {
  return <Footer>{props.children}</Footer>;
};
BasePage.Button = function BasePageButton(props: any) {
  return (
    <SquareButton {...props}>
      <IconBtn src={props.img}></IconBtn>
      {props.children}
    </SquareButton>
  );
};

export default BasePage;
