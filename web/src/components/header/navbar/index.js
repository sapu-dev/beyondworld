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
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">
              <a className="nav-link">About Us</a>
            </Link>{" "}
          </li>
          <li className="nav-item">
            <Link href="/oders">
              <a className="nav-link">Oders</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/products">
              <a className="nav-link">Products</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a className="nav-link">Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Navbar;
