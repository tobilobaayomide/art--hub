import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../home/hero";
import Featured from "../home/featured";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="flex-1">
        <Hero /> 
        <Featured />
      </main>
      <Footer menuOpen={menuOpen} />
    </div>
  );
};

export default Home;