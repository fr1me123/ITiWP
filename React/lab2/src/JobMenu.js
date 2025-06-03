import React from 'react';

const menus = {
    developer: ['GitHub', 'Stack Overflow', 'MDN Web Docs', 'React Docs', 'VS Code', 'CodePen', 'W3Schools'],
    designer: ['Behance', 'Dribbble', 'Figma', 'Adobe XD', 'Canva', 'Designspiration', 'Coolors'],
    marketer: ['HubSpot', 'Mailchimp', 'Google Ads', 'SEMrush', 'Ahrefs', 'Moz', 'MarketingProfs'],
    teacher: ['Google Classroom', 'Khan Academy', 'Zoom', 'Moodle', 'Coursera', 'edX', 'Teachmint'],
    scientist: ['arXiv', 'PubMed', 'Nature', 'ScienceDirect', 'IEEE Xplore', 'Google Scholar', 'Scopus']
};

function JobMenu({ profession }) {
    const items = menus[profession] || [];

    return (
        <div>
            <h2>Ссылки для профессии: {profession}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}><a href="#">{item}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default JobMenu;
