import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleSearchClick = () => {
        if (input.trim()) {
            onSearch(input);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter city name"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSearchClick}>Search</button>
        </div>
    );
};

export default SearchBar;
