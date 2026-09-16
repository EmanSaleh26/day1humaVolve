import { AppProvider } from "./components/providers/AppProvider";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import "./index.css";

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Home />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
