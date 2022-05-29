import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/about";
import Separator from "../components/Separator";
import Define from "../components/Define";
import SeparatorImage from "../components/SeparatorImage";
import Footer from "../components/Footer";
import React from "react";


function Home() {
    return(
        
    <>
    <Header />
    <Navbar />
    <About />
    <Separator />
    <Define />
    <SeparatorImage />
    <Footer />
   </>
    )
}

export default Home;