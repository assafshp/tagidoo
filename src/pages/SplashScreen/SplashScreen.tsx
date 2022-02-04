import logo from "../../assets/icons/tagido-splash.svg";
import { BackgroundScreen, Logo, SmallLogo } from "./style";

const SplashScreen = (props: any) => {
  return (
    <BackgroundScreen>
      {props.small ? <SmallLogo src={logo} /> : <Logo src={logo}></Logo>}
      {props.children}
    </BackgroundScreen>
  );
};

export default SplashScreen;
