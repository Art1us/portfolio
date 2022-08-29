import PortfolioItem from "./PortfolioItem";

export default function MyWork() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className="portfolio">
        <PortfolioItem
          img={require("../img/portfolio/amazon-clone-preview.jpg")}
          title="Amazon Clone"
          description="An interpretation of Amazon basic functionality.
          Accounts and Login Page, Products Page, Cart and Checkout Page"
          projectLink="https://dynamic-gumption-db6543.netlify.app/"
          codeLink="https://github.com/Art1us/amazon-clone"
        />
        <PortfolioItem
          img={require("../img/portfolio/tesla-clone-preview.jpg")}
          title="Tesla Clone"
          description="A clone of Tesla's main page with styling and animations"
          projectLink="https://idyllic-lamington-3d8a69.netlify.app/"
          codeLink="https://github.com/Art1us/tesla-clone"
        />
        <PortfolioItem
          img={require("../img/portfolio/picsome-preview.jpg")}
          title="Pic Some"
          description="Add to cart few images to be printed"
          projectLink="https://regal-tartufo-b4baea.netlify.app/"
          codeLink="https://github.com/Art1us/picksome"
        />
      </div>
    </section>
  );
}
