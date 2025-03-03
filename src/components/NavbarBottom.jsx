import React from "react";
import { Home, User, Search, Heart, Sparkles} from "lucide-react";
import { motion } from "framer-motion";

const NavbarBottom = () => {
  return (
    <div className="navbar-bottom">
    <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
  >
     <a href="/home">
        <Home size={24} />
      </a>

  </motion.div>
     
      <a href="/search">
        <Search size={24} />
        </a>

      <a href="/favorites">
        <Heart size={24} />
      </a>

        <a href="/trending">
        <Sparkles size={24} />
        </a>

      <a href = "/profile">
        <User size={24} />
        </a>
    </div>

    
  );
};

export default NavbarBottom;
