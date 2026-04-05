import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import useLenis from "./hooks/useLenis";
import AnimatedRoutes from "./routes/AnimatedRoutes";

function App() {
  useLenis();
  return (
    <>
    <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
    </>
  );
}

export default App;