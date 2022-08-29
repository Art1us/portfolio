import Carousel from "./Carousel";

export default function MyServices() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">My skills</h2>
      <Carousel/>

      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
}
