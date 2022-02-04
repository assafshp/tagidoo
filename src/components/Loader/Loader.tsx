import { COLORS } from "../../theme";
import { Logo, Wrapper } from "./style";
import { PulseLoader } from "react-spinners";
import logo from "../../assets/icons/cartModal.svg";

interface LoaderProps {
  loading: boolean;
  message?: string;
  size?: number;
}

const Loader = (props: LoaderProps) => {
  return props.loading ? (
    <Wrapper>
      <Logo src={logo} />
      <div style={{ position: "absolute" }}>
        <PulseLoader size={12} color={COLORS.color_lightblue} />
      </div>
    </Wrapper>
  ) : null;
};

export default Loader;
