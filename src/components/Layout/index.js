import React from "react";
import Header from "../Header/";
import "../../assets/scss/style.scss";

const Layout = ({ children }) => {
    return (
        <main className="main-content">
            <Header />
            { children }
        </main>
    )
}

export default Layout;