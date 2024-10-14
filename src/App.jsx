import React from "react";
import { createContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vision from "./components/Vision";

export const UserContext = createContext();

const App = () => {
  return (
    <>
      <UserContext.Provider value={{name:'Meshach'}}>
        <Navbar />
        <Hero />
        <Vision/>
      </UserContext.Provider>
    </>
  );
};
export default App;
