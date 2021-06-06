import React from "react";
import Content from "./Content";
import Footer from "./Footer";

//This is the home page component

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>            
            <p>
                Welcome to my knock off, not very good version
                of excel!
            </p>
            <Content />
            <Footer />
        </div>
    )
}



export default Home;