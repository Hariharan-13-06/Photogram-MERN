import React, { useContext } from 'react';
import Post from './Post';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId, userName }) => {
    const posts = useSelector((state) => state.posts);

    console.log('posts',posts);
    return (
        <div className="font-mono h-full mx-auto p-5">
            {
                posts.map(post => (
                
                    <Post key={post.id} setCurrentId={setCurrentId} userName={userName} id={post._id} name={post.creator} img={post.selectedFile} title={post.title} tags={post.tags} likeCount={post.likeCount} heartCount={post.heartCount} />
                   
                ))
            }
        </div>
    )
}

export default Posts;
