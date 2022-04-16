import React, { useState } from "react";
import Comment from "../Comment/Comment";
import './Post.scss';

const Post = (props) => {

    const [postDetails, setPostDetails] = useState({
        commentList: [
            {
                id: '0',
                name: 'Ashish Hattimare',
                lastUpdated: '1 month ago',
                message: `Impressive. Though it seems the drag feature to be improved. But overall it
                looks incredible You've nailed the design and the responsiveness at various`,
                rating: 18,
                replyList: [
                    {
                        id: '0_0',
                        name: 'Amit Hattimare',
                        lastUpdated: 'few seconds ago',
                        message: `Good one`,
                        rating: 2
                    }
                ]
            },
            {
                id: '1',
                name: 'Nishtha Pathak',
                lastUpdated: '1 month ago',
                message: `Impressive. Though it seems the drag feature to be improved. But overall it
                looks incredible You've nailed the design and the responsiveness at various`,
                rating: 12,
                replyList: []
            }
        ]
    });

    const replyToSubComment = (parentCommentId, _message) => {
        const comment = postDetails.commentList.find(comment => comment.id === parentCommentId);
        if (comment) {
            comment.replyList.push({
                id: `${parentCommentId}_${comment.replyList.length}`,
                name: 'Random',
                lastUpdated: '1 month ago',
                message: _message,
                rating: 0
            });
            setPostDetails({
                commentList: postDetails.commentList
            });
        }
    }
    const replyToComment = (parentCommentId, _message) => {
        const comment = postDetails.commentList.find(comment => comment.id === parentCommentId);
        if (comment) {
            comment.replyList.push({
                id: `${parentCommentId}_${comment.replyList.length}`,
                name: 'Random',
                lastUpdated: '1 month ago',
                message: _message,
                rating: 0
            });
            setPostDetails({
                commentList: postDetails.commentList
            });
        }
    }

    const commentContainerList = postDetails.commentList
        .map((comment, commentIndex) => {
            return (
                <div className="flex flex-col" key={comment.id}>
                    <Comment comment={comment} id={comment.id} reply={ replyToComment }/>
                    {
                        <div className="reply__container flex flex-row">
                            <div className="reply__indicator flex flex-jc-c flex-ai-c">
                                <span></span>
                            </div>
                            <div className="reply__list flex flex-col w-100">
                                {
                                    comment.replyList.map(
                                        reply => <Comment comment={ reply } key={reply.id} id={comment.id} reply={ replyToSubComment } />
                                    )
                                }
                            </div>
                        </div>
                        
                    }
                </div>
            );
        })

    return (
        <section className="post flex flex-col">
            { commentContainerList }
        </section>
    );
};
export default Post;
