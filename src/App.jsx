import Chip from "./components/Chip";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model></Model>
      <Features></Features>
      <Chip></Chip>
      <Footer></Footer>
    </main>
  );
};

// export default Sentry.withProfiler(App);
export default App;
