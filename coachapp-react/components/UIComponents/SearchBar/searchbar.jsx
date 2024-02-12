import React from 'react';
import styles from '@/styles/Home.module.css';

export default function SearchBarComponent({...props}) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type="text"
                placeholder="Rechercher..."
                value={props.searchTerm}
                onChange={props.handleChange}
            />
            <button onSubmit={props.handleSubmit} type="submit">Rechercher</button>
        </form>
    )
}