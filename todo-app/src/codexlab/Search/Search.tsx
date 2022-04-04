import React from "react";
import PropTypes from 'prop-types';

import './Search.scss'

type SearchProps = {
    type: string;
    placeholder: string;
};

const Search = (props: SearchProps) => {
    return (
        <input 
            type={props.type} 
            className="codelab-search border-radius"
            placeholder={props.placeholder}
        />
    );
}

Search.defaultProps = {
    type: 'text',
    placeholder: 'Create a new todo...'
} as SearchProps;

Search.protoType = {
    type: PropTypes.string,
    placeholder: PropTypes.string
};

export default Search;