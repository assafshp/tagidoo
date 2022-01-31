import logo from "../../assets/icons/tagido-splash.svg";
import { BackgroundScreen, Logo } from "./style";

const SplashScreen = (props: any) => {
  return (
    <BackgroundScreen>
      <Logo src={logo}></Logo>
      {props.children }
    </BackgroundScreen>
  );
};

export default SplashScreen;
