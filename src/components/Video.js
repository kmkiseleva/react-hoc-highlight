const Video = ({ url, views }) => {
  return (
    <div className="item item-video">
      <iframe
        title={Math.random()}
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <p className="views">Просмотров: {views}</p>
    </div>
  );
};

export default Video;
