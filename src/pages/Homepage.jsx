import AppNav from "../components/AppNav";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className="test">WorldWise</h1>
    </div>
  );
}

export default Homepage;
