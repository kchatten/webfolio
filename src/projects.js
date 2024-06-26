import React from 'react';

const ProjectsPage = () => {

    const projects = [
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
            <button
                key={element.title}
                className="contact-button"
                onClick={() => { handleClick(element.href) }}
            >
                {element.title}
            </button>
        ));

    };

    return (
        <div id="contact-container">
            {buildProjectButtons()}
        </div>
    );
};

export default ProjectsPage;