const CardsBlock = ({ projects }) => {
  return (
    <div className="cards__block">
      {projects.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <a className="card__link">
      <div className="card">
        <img className="card__image" src={item.imageSrc} alt="svg image" />
        <div className="text">
          <h2 className="card__title">{item.title}</h2>
          <p className="card__description">{item.description}</p>
        </div>
      </div>
    </a>
  );
};
export default CardsBlock;
