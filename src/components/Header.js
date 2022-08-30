import NavLink from "./NavLink";


export default function Header() {
  function toggleClass() {
    document.body.classList.toggle("nav-open");
  }

  return (
    <header>

      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={toggleClass}
      >
        <span className="hamburger"></span>
      </button>

      <nav className="nav">
        <ul className="nav__list">
          <NavLink name="Home" link="#home" />
          <NavLink name="My Skills" link="#services" />
          <NavLink name="About me" link="#about" />
          <NavLink name="My Work" link="#work" />
          <NavLink name="Contact Me" link="#footer" />
        </ul>
      </nav>
    </header>
  );
}
