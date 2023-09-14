import React, { useState } from 'react';
import FAQItem from './FAQItem'; // FAQ 항목을 랜더링하는 컴포넌트
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const FAQList = ({ faqData, activeTab, handleTabClick }) => {
    const activeCategory = faqData[activeTab];

    return (
        <div className="section-component ui-tab">
            <div className="component-tab no-space">
                <div className="tab-list ui-tab-nav">
                    <ul className="tab-list-col" role="tablist">
                        {faqData.map((category, index) => (
                            <li className={`tab-item ${activeTab === index ? 'active' : ''}`} key={index}>
                                <Link className="tab-link" to="#none" role="button" onClick={() => handleTabClick(index)}>
                                    <span className="txt">{category.category}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="article-component">
                {activeCategory.faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isActive={activeTab === index}
                    />
                ))}
            </div>
        </div>
    );
};

FAQList.propTypes = {
    faqData: PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.string.isRequired,
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FAQList;
