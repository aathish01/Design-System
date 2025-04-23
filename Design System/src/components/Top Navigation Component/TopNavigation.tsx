import React from 'react';

interface TopNavigationProps {
    items: { label: string; href: string }[];
}

const TopNavigation: React.FC<TopNavigationProps> = ({ items }) => {
    return (
        <nav className="bg-gray-800">
            <ul className="flex space-x-4">
                {items.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="text-white hover:underline"
                            aria-label={item.label}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TopNavigation;