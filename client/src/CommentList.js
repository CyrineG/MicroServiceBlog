import React from 'react';

export default ({comments}) => {
    const renderComments = Object.values(comments).map( comment => {
        return <li key={comment.id}> {comment .comment} </li>;
    });

    return <div> <ul>{renderComments} </ul></div>
}