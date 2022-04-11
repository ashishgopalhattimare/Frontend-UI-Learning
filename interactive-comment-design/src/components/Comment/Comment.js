import { useState } from 'react';
import './Comment.scss';
import Button from '../../codexlab/Button/Button';
import Rating from '../../codexlab/Rating/Rating';

const Comment = (props) => {

    const [comment, setComment] = useState({
        name: 'Ashish Hattimare',
        lastUpdated: '1 month ago',
        message: `Impressive. Though it seems the drag feature to be improved. But overall it
        looks incredible You've nailed the design and the responsiveness at various`,
        rating: 18
    });

    const updateRating = (factor) => {
        if (comment.rating === 0 && factor === -1) return;
        setComment({
            ...comment,
            rating: comment.rating + factor
        });
    }

    return (
        <section className="comment rounded-border">
            <Rating class="rounded-border hide-for-mobile"
                style={{marginRight: '16px', flexDirection: 'column-reverse'}}
                rating={comment.rating}
                direction="col"
                onIncrement={() => { updateRating( 1); }}
                onDecrement={() => { updateRating(-1); }}
            />
            <div className="comment__main">
                <div className="comment__main__header flex flex-jc-sb flex-ai-c">
                    <span className="title__left flex flex-ai-c">
                        <span className="user__profile"></span>
                        <span className="user__name">{ comment.name }</span>
                        <span className="last-updated">{ comment.lastUpdated }</span>
                    </span>
                    <span className="title__right">
                        <Button class="primary rounded-border" label="REPLY"/>
                    </span>
                </div>
                <p className="comment__main__message">{ comment.message }</p>
            </div>
            <div className="comment__footer flex flex-jc-sb hide-for-desktop">
                <Rating class="rounded-border"
                    rating={comment.rating}
                    direction="row"
                    onIncrement={() => { updateRating( 1); }}
                    onDecrement={() => { updateRating(-1); }}
                />
                <Button class="primary rounded-border" label="REPLY"/>
            </div>
        </section>
    );
};
export default Comment;