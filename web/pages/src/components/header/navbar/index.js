import Link from "next/link";
const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">
        beyond world
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/src/containers/pages/aboutUs" className="nav-link">
              <a className="nav-link">about</a>
            </Link>{" "}
          </li>
          <li className="nav-item">
            <Link href="/src/containers/pages/orders">
              <a className="nav-link">oders</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/src/containers/pages/products">
              <a className="nav-link">product</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/src/containers/pages/contactUs">
              <a className="nav-link">contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Navbar;
