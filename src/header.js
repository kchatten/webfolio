import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// #region HELPER FUNCTIONS RELATED TO BANNER TEXT 
const generateRandomChar = (variants) => {
    return variants[Math.floor(Math.random() * variants.length)]; // Take in a variant array and return a random character from it.
};

const generateSiteName = () => {
    const kVariants = ['K', 'k', '|<', '₭'];
    const cVariants = ['C', 'c', '₾', '⊆'];
    const hVariants = ['H', 'h', '#'];
    const aVariants = ['A', 'a', '4', '∆'];
    const tVariants = ['T', 't', '+', '7', '⊤', '⊺', '⋋'];
    const dVariants = ['D', 'd', 'Ⅾ', 'ⅾ', 'ↁ'];
    const eVariants = ['E', 'e', '∃', '∈', '∑', '⋲'];
    const vVariants = ['V', 'v', '\\/', '√'];
    const dot = ['.'];

    const variantsArray = [kVariants, cVariants, hVariants, aVariants, tVariants, dot, dVariants, eVariants, vVariants]; // Define an array, of arrays.
    return variantsArray.map(generateRandomChar).join(''); // For each variant in the array, run generateRandomChar, joining all results.
};
// #endregion END OF HELPER FUNCTIONS 

const Header = () => {
    const [activePage, setActivePage] = useState("/"); // The state that holds the active page, used to determine button active state.
    const navigate = useNavigate(); // Define the navigator.
    const bannerTextRef = useRef(); // Define the reference to our banner text.

    const buttons = [ // Define the array of buttons to populate the header.
        {
            pageTitle: "Home",
            href: "/"
        },
        {
            pageTitle: "Projects",
            href: "/projects"
        },
        {
            pageTitle: "Contact",
            href: "/contact"
        }
    ];

    useEffect(() => { // When this component mounts, set the state of activePage to the url path. This handles header button active state initialization.
        const initialPage = window.location.pathname;
        setActivePage(initialPage);
    }, []);

    useEffect(() => {
        const updateBannerText = () => {
            if (bannerTextRef.current) {
                bannerTextRef.current.textContent = generateSiteName();
            }
        };

        const intervalId = setInterval(updateBannerText, 150);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const handleClick = (href) => { // Define the handleClick function. Navigates to the route passed through href and sets the state to reflect the change.
        navigate(href);
        setActivePage(href);
    };

    const renderHeaderButtons = () => { // Define the function to populate the header with buttons.
        return buttons.map(button => {
            const isActive = activePage === button.href; // Defines a variable to hold activity state which is set to true when the activePage is equal to the href of the button being mapped.

            if (isActive) { // If isActive is true, return a button with the active class.
                return (
                    <button
                        key={button.pageTitle.toLowerCase()}
                        onClick={() => handleClick(button.href)}
                        className="--active"
                    >
                        <p>{button.pageTitle}</p>
                    </button>
                );
            } else { // return a regular button.
                return (
                    <button
                        key={button.pageTitle.toLowerCase()}
                        onClick={() => handleClick(button.href)}
                    >
                        <p>{button.pageTitle}</p>
                    </button>
                );
            }
        });
    };

    return ( // Return for the Header function. It returns header element that contains a rotating site title and is populated with buttons via the renderHeaderButtons function.
        <header id="header">
            <p ref={bannerTextRef} id="site-title" aria-label="kchat.dev"></p>
            <div id="button-container">
                {renderHeaderButtons()}
            </div>
        </header>
    );
};

export default Header;