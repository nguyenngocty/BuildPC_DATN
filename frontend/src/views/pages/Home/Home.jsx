import "./Home.css";
import { getHomeData } from "../../../controllers/homeController";

import Header from "../../components/Header";
import HeroBanner from "../../components/Home/HeroBanner";
import BuildPCSection from "../../components/Home/BuildPCSection";
import CategorySection from "../../components/Home/CategorySection";
import ProductSection from "../../components/Home/ProductSection";
import SuggestedBuildSection from "../../components/Home/SuggestedBuildSection";
import TrustSection from "../../components/Home/TrustSection";
import BlogSection from "../../components/Home/BlogSection";
import Footer from "../../components/Footer";

function Home() {
  const { products, categories, builds } = getHomeData();

  return (
    <div className="app">
      <Header />
      <HeroBanner />

      <main className="container main-content">
        <BuildPCSection />
        <CategorySection categories={categories} />
        <ProductSection products={products} />
        <SuggestedBuildSection builds={builds} />
        <TrustSection />
        <BlogSection />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
