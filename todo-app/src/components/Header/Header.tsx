import React from "react";
import './Header.scss';
import PropTypes from 'prop-types';

type HeaderProps = {
    title: string;
    searchBar: boolean;
}

const Header = (props: HeaderProps) => {

    const SearchBarComponent = (props.searchBar) ?
    (
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    ) : (<></>);

    return (
       <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    { SearchBarComponent }
                </div>
            </div>
        </nav>
       </>
    );
};

// Default Values to prop properties to this component
Header.defaultProps = {
    title: 'Your Application Title'
} as HeaderProps;

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
};

export default Header;