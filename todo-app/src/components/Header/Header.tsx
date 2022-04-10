import React, { useState } from "react";
import './Header.scss';
import PropTypes from 'prop-types';

type HeaderProps = {
    title: string;
    searchBar: boolean;
}

const assertPath = 'assets/';

const Header = (props: HeaderProps) => {

    const [design, setDesign] = useState('sun');

    const switchDesign = () => {
        setDesign((design === 'sun') ? 'moon' : 'sun');
    }
    const updateBackgroundStyle = (_design: string) => {
        const image = (_design === 'sun') ? 'bg-desktop-light.jpg' : 'bg-desktop-dark.jpg';
        return {
            backgroundImage: `url('${assertPath}${image}')`
        };
    };
    return (
       <>
        <div id="background-image" style={ updateBackgroundStyle(design) }></div>
        <header className="container flex flex-row flex-jc-sb">
            <span className="title flex flex-ai-c">T O D O</span>
            <span className="iconBox">
                <img onClick={switchDesign} src={`assets/icon-${design}.svg`} alt="img"/>
            </span>
        </header>
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