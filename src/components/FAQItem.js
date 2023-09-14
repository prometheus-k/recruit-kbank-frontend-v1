import React from 'react';

const FAQItem = ({ question, answer, isActive }) => {
    return (
        <div className={`tab-content ui-tab-content ${isActive ? 'active' : ''}`}>
            <ul className="faq-list">
                <li>
                    <div className="tit" dangerouslySetInnerHTML={{ __html: question }}></div>
                    <div className="txt" dangerouslySetInnerHTML={{ __html: answer }}></div>
                </li>
            </ul>
        </div>
    );
};

export default FAQItem;
