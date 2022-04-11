import './Rating.scss';

function configureRatingStyle(direction) {
    return (direction === 'col') ?
    {
        rating: 'flex-col col-align'
    } : {
        rating: 'flex-row row-align'
    };
}

const Rating = (props) => {
    const style = configureRatingStyle(props.direction);
    return (
        <aside
            className={ `rating flex flex-ai-c flex-jc-c ${ props.class } ${ style.rating }` }
            style={ props.style }
        >
            <span onClick={ props.onDecrement }>-</span>
            <span>{ props.rating }</span>
            <span onClick={ props.onIncrement }>+</span>
        </aside>
    );
};

export default Rating;
