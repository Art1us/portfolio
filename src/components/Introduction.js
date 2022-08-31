import img from "../img/portf1.jpg";

export default function Introduction() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <br />
        <strong>Artur Pazyniuk</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        front-end dev
      </p>
      <img src={img} alt="Artur Pazyniuk" className="intro__img" />
      <div className="intro__btn">
        <a href="#work" className="btn">
          My Work
        </a>
      </div>
    </section>
  );
}
