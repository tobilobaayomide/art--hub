import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="flex-1">
        
      </main>
      <Footer menuOpen={menuOpen} />
    </div>
  );
};

export default Home;