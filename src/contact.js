import React from 'react';

const ContactPage = () => {

    const contacts = [
        {
            title: "LinkedIn",
            href: "https://www.linkedin.com/in/kyalchatten"
        },
        {
            title: "Github",
            href: "https://www.github.com/kchatten"
        },
        {
            title: "GMail",
            href: "mailto:kyalchatten@gmail.com?subject=Hi Kyal!"
        }
    ];

    const handleClick = (href) => {
        const confirmed = window.confirm("You are navigating away from this webpage.")

        if (confirmed) {
            window.open(href)
        }
    };


    const buildContactButtons = () => {

        return contacts.map(element => (
            <button
                key={element.title}
                className="contact-button"
                onClick={() => { handleClick(element.href) }}
            >
                <p>{element.title}</p>
            </button>
        ));

    };

    return (
        <div id="contact-container">
            {buildContactButtons()}
        </div>
    );
};

export default ContactPage;

