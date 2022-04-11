import React from "react";
import Comment from "../Comment/Comment";
import './Post.scss';

const Post = (props) => {

    const postDetails = {
        commentList: [
            {
                id: '1',
                name: 'Ashish Hattimare',
                lastUpdated: '1 month ago',
                message: `Impressive. Though it seems the drag feature to be improved. But overall it
                looks incredible You've nailed the design and the responsiveness at various`,
                rating: 18,
                replyList: [
                    {
                        id: '1_1',
                        name: 'Amit Hattimare',
                        lastUpdated: 'few seconds ago',
                        message: `Good one`,
                        rating: 2
                    },
                    {
                        id: '1_2',
                        name: 'XYZ',
                        lastUpdated: '2 seconds ago',
                        message: `Good one!!!!`,
                        rating: 1
                    }
                ]
            },
            {
                id: '2',
                name: 'Nishtha Pathak',
                lastUpdated: '1 month ago',
                message: `Impressive. Though it seems the drag feature to be improved. But overall it
                looks incredible You've nailed the design and the responsiveness at various`,
                rating: 12,
                replyList: []
            }
        ]
    };

    const commentContainerList = postDetails.commentList
        .map(comment => {
            return (
                <div className="flex flex-col" key={comment.id}>
                    <Comment comment={comment}/>
                    {
                        <div className="reply__container flex flex-row">
                            <div className="reply__indicator flex flex-jc-c flex-ai-c">
                                <span></span>
                            </div>
                            <div className="reply__list flex flex-col w-100">
                                {
                                    comment.replyList.map(reply => <Comment comment={ reply } key={reply.id}/>)
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
