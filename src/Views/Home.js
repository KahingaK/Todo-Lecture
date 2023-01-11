import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import TodoList from "../Components/TodoList";

function Home() {
    return (
        <div>
            <NavBar/>
            <TodoList/>
            <Footer/>
        </div>

        
    )
    
}

export default Home