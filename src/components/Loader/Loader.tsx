import { ClipLoader } from "react-spinners";
import { COLORS } from "../../theme";
import { Message, Wrapper } from "./style";

interface LoaderProps {
  loading: boolean;
  message?: string;
  size?: number;
}

const Loader = (props: LoaderProps) => {
  return props.loading ? (
    <Wrapper>
      <ClipLoader
        size={props.size ? props.size : 70}
        color={COLORS.color_lightblue}
        loading={props.loading}
      />
      <Message>{props.message}</Message>
    </Wrapper>
  ) : null;
};

export default Loader;
