import Popular from "./Popular";
import New from "./New";

const withHighlight = (Component) => {
  const Wrapper = (props) => {
    if (props.views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    }

    if (props.views > 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    }

    return <Component {...props} />;
  };

  return Wrapper;
};

export default withHighlight;
