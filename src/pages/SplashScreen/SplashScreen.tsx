import logo from "../../assets/icons/tagido-logo.svg";
import { BackgroundScreen, Logo } from "./style";

const SplashScreen = () => {
  return (
    <BackgroundScreen>
      <Logo src={logo}></Logo>
    </BackgroundScreen>
  );
};

export default SplashScreen;
