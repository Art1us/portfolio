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
          description={
            <p>
              Amazon Clone built with React JS. Accounts and Login Page Products
              Page Cart and Checkout Page Real Payments Order History Page
            </p>
          }
          projectLink="https://dynamic-gumption-db6543.netlify.app/"
          codeLink="https://github.com/Art1us/amazon-clone"
        />
        <PortfolioItem
          img={require("../img/portfolio/tesla-clone-preview.jpg")}
          title="Tesla Clone"
          description={
            <p>Tesla Clone using React JS and Redux, and animations</p>
          }
          projectLink="https://joyful-twilight-74a3ef.netlify.app/"
          codeLink="https://github.com/Art1us/tesla-clone"
        />
        <PortfolioItem
          img={require("../img/portfolio/picsome-preview.jpg")}
          title="Pic Some"
          description={<p>Pic some app using React JS and API calls.</p>}
          projectLink="https://regal-tartufo-b4baea.netlify.app/"
          codeLink="https://github.com/Art1us/picksome"
        />
      </div>
    </section>
  );
}
