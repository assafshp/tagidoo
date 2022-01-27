import { COLORS } from "../../theme";
import { Wrapper } from "./style";
import { SpinnerDotted } from "spinners-react";
import logo from "../../assets/icons/TAGIDOO_E-03.svg";

interface LoaderProps {
  loading: boolean;
  message?: string;
  size?: number;
}

const Loader = (props: LoaderProps) => {
  return props.loading ? (
    <Wrapper>
      <img style={{ height: "100px" }} src={logo} />
      <SpinnerDotted size={70} color={COLORS.color_lightblue} />
    </Wrapper>
  ) : null;
};

export default Loader;
