import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Position } from "./components/Position";
import { HowItWorks } from "./components/HowItWorks";
import { Proof } from "./components/Proof";
import { Employers } from "./components/Employers";
import { Community } from "./components/Community";
import { HonestNote } from "./components/HonestNote";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App bg-ivory text-ink min-h-screen" data-testid="app-root">
      <Navbar />
      <main>
        <Hero />
        <Position />
        <HowItWorks />
        <Proof />
        <Employers />
        <Community />
        <HonestNote />
      </main>
      <Footer />
    </div>
  );
}

export default App;
