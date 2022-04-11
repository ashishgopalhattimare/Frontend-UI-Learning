import React from 'react';
import './TextArea.scss';

const TextArea = React.forwardRef((props, ref) => {
    return (
        <textarea
            ref={ ref }
            className={`textarea ${props.className}`}
            style={props.style}
            placeholder={props.placeholder || 'Add a comment'}
        ></textarea>
    );
});

export default TextArea;