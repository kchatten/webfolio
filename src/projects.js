import React from 'react';

const ProjectsPage = () => {

    const projects = [
        {
            title: "Astro Blog",
            href: "https://kchatblog.netlify.app"
        },
        {
            title: "Type 1 Diabetes Awareness & Educational Resource",
            href: "https://www.thedword.ca"
        },
        {
            title: "Sleep Aide Application",
            href: "https://audioverlay.netlify.app"
        }
    ];
   


    const handleClick = (href) => {
        const confirmed = window.confirm("You are navigating away from this webpage.")

        if (confirmed) {
            window.open(href)
        }
    };


    const buildProjectButtons = () => {

        return projects.map(element => (
            <div
                key={element.title}
                className="contact-button"
                onClick={() => { handleClick(element.href) }}
            >
                <p>{element.title}</p>
            </div>
        ));

    };

    return (
        <div id="contact-container">
            {buildProjectButtons()}
        </div>
    );
};

export default ProjectsPage;