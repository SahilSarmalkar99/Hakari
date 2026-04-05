import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./routes/AnimatedRoutes";

function App() {
  return (
    <>
    <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
    </>
  );
}

export default App;