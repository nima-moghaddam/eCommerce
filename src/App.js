// All Routes
import Router from "./routes/Router";

// Layout Components
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <Navbar />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
