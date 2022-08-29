export default function NavLink({name,link}) {

    function navLinkHandler(){
        document.body.classList.remove('nav-open')
    }


  return (
    <li className="nav__item" onClick={navLinkHandler}>
      <a href={link} className="nav__link">
        {name}
      </a>
    </li>
  );
}
