import shortid from "shortid";
import Video from "./Video";
import Article from "./Article";
import withHighlight from "./withHighlight";

const HOCArticle = withHighlight(Article);
const HOCVideo = withHighlight(Video);

const List = ({ list }) => {
  return list.map((item) => {
    switch (item.type) {
      case "article":
        return <HOCArticle key={shortid.generate()} {...item} />;

      case "video":
        return <HOCVideo key={shortid.generate()} {...item} />;

      default:
        return <p>Empty</p>;
    }
  });
};

export default List;
