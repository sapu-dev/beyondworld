import Header from "next/head";
import Navbar from "./navbar";
const HeaderSection = () => (
  <div>
    <Header>
      <title>beyound the world</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      />
    </Header>
    <Navbar />
  </div>
);

export default HeaderSection;
