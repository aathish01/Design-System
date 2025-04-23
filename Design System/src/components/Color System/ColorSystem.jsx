import React from 'react';

const ColorSystem: React.FC = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Color System</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-primary text-white p-4">Primary</div>
                <div className="bg-secondary text-white p-4">Secondary</div>
                <div className="bg-tertiary text-white p-4">Tertiary</div>
                <div className="bg-neutral-light text-black p-4">Neutral Light</div>
                <div className="bg-neutral-dark text-white p-4">Neutral Dark</div>
                <div className="bg-success text-white p-4">Success</div>
                <div className="bg-info text-white p-4">Info</div>
                <div className="bg-warning text-black p-4">Warning</div>
                <div className="bg-error text-white p-4">Error</div>
            </div>
        </div>
    );
};

export default ColorSystem;