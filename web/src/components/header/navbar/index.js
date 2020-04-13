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
        <Link href="/about">
          <a>about</a>
        </Link>
      </li>
    </ul>
  </div>
);
export default Navbar;
