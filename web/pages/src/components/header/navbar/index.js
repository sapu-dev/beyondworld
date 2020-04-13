import Link from "next/link";
const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>home</a>
        </Link>
      </li>
      <li>
        <Link href="/src/containers/pages/aboutUs">
          <a>about</a>
        </Link>{" "}
      </li>
      <li>
        <Link href="/src/containers/pages/oders">
          <a>orders</a>
        </Link>
      </li>
      <li>
        <Link href="/src/containers/pages/products">
          <a>product</a>
        </Link>
      </li>
      <li>
        <Link href="/src/containers/pages/contactUs">
          <a>contact</a>
        </Link>
      </li>
    </ul>
  </div>
);
export default Navbar;
