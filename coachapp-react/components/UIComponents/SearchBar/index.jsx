import SearchBarComponent from '@/components/UIComponents/SearchBar/searchbar';
import React, { useState } from 'react';

export default function SearchBarForm () {
    const {
        onSearch
    } = useSearchBarModel

    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(onSearch);
    };

    return (
        <>
            <SearchBarComponent handleSubmit={handleSubmit} searchTerm={searchTerm} handleChange={handleChange} />
        </>
    )
}