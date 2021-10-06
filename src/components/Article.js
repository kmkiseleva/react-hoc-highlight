const Article = ({ title, views }) => {
  console.log(title);
  return (
    <div className="item item-article">
      <h3>
        <a href="/">{title}</a>
      </h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  );
};

export default Article;
