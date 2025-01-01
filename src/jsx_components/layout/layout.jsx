import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }){
    useEffect(() => {
        const header = document.getElementById('header');
        const logo = document.getElementById('nsr_logo')

        window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shrunk');
            logo.classList.add('shrunked_logo')
        } else {
            header.classList.remove('shrunk');
            logo.classList.remove('shrunked_logo')  
        }
        });
    }, [])
    return (
        <div style={{ overflow: "hidden" }}>
            <Header />
            { children }
            <Footer />
        </div>
    )
}