import Navbar from "comoinents/Navbar";
import Resourcehighlight from "comoinents/ResourceHighlight";
import NewsLetter from "comoinents/Newsletter";
import ResourceList from "comoinents/ResourceList";
import Footer from "comoinents/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Resourcehighlight />
      <NewsLetter />
      <ResourceList />
      <Footer />
    </>
  );
}
