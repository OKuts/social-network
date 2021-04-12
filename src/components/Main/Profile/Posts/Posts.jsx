import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {
    const postItem = props.posts.map(i => <Post key={i.id} post={i.post} />)

    return (
        <div>
            {postItem}
        </div>
    )
}

export default Posts;

