import React from "react";
import PropTypes from 'prop-types';

import './Search.scss'

type SearchProps = {
    type: string;
    placeholder: string;
    onSubmit: Function;
};

const Search = (props: SearchProps) => {

    const submitHandler = (event: any) => {
        const value = event.target.value;
        if (event.keyCode === 13 && value.length > 0) {
            event.target.value = '';
            props.onSubmit(value);
        }
    }

    return (
        <input 
            type={props.type} 
            className="codelab-search border-radius"
            placeholder={props.placeholder}
            onKeyDown={submitHandler}
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