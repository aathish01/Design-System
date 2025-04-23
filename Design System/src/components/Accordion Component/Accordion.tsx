import React, { useState } from 'react';

interface AccordionProps {
    title: string;
    content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className="flex justify-between w-full p-4 text-left"
            >
                {title}
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <div className="p-4">{content}</div>}
        </div>
    );
};

export default Accordion;