import img from "../img/portf2.jpg";

export default function AboutMe() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Front end developer
      </p>

      <div className="about-me__body">
        <p>
          I'm Arthur, a passionate freelancer bringing you programming and
          design from the future. I am experienced in developing web and desktop
          applications including full front end design.
        </p>
      </div>

      <img src={img} alt="Artur Pazyniuk" className="about-me__img" />
    </section>
  );
}
