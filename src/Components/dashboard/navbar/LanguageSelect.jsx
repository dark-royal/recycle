import React from 'react';

const languageSelect = [
    { label: 'Eng (US)', image:  "../../asset/United.svg"},
    { label: 'Arabic', image: '/images/arabic-flag.png' },
    { label: 'Spanish', image: '/images/spanish-flag.png' },
    { label: 'Indian', image: '/images/indian-flag.png' }
];

const LanguageSelect = () => {
    return (
        <div className="relative">
            <select className="bg-white border border-transparent rounded-md p-2 pl-10">
                {languageSelect.map((option, index) => (
                    <option key={index} value={option.label}>
                        <img
                            src={option.image}
                            alt={`${option.label} flag`}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-6"
                        />
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelect;
