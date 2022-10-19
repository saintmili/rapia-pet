import React from "react";

import search from "../../assets/search.svg";

import './search-field.styles.css';

export const SearchField = ({placeholder}) => {
    return (
        <div className='search'>
            <input 
                className="search-input" 
                type='text' 
                placeholder={placeholder}
            />
            <div className="search-btn">
                <img src={search} alt="search-icon" />
            </div>
        </div>
    )
}