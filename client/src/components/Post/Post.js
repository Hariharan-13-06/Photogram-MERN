import React from 'react';
import { useDispatch } from 'react-redux';
import { likePost, deletePost, heartPost } from '../../actions/posts';
import { ThumbUpIcon, DotsVerticalIcon } from '@heroicons/react/outline';
import { HeartIcon, TrashIcon } from '@heroicons/react/solid';

const Post = ({setCurrentId, id, name, img, title, tags, likeCount, heartCount }) => {
    const dispatch = useDispatch();
    const postTags = tags?.split(',');
    console.log('POST');
    console.log(name,tags);

    return (
        
            <div className="shadow-md my-4 p-5">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <p className=" md:text-4xl font-serif text-xl font-bold pt-4">{name}</p>
                        <p className="text-sm mb-4">{title}</p>
                    </div>
                    <DotsVerticalIcon className="h-7 w-7 cursor-pointer" />
                </div>
                <img src={img} className="md:h-80 md:w-80 w-auto text-center" />
                <div className="flex flex-row items-center justify-between">
                    <div className='flex flex-row items-center py-3 space-x-3'>
                        <ThumbUpIcon onClick={() => dispatch(likePost(id))} className="h-7 w-7 cursor-pointer text-blue-700" />
                        <p className="text-lg font-semibold">{likeCount}</p>
                        <HeartIcon onClick={() => dispatch(heartPost(id))} className="h-7 w-7 cursor-pointer text-red-500" />
                        <p className="text-lg font-semibold">{heartCount}</p>
                    </div>
                    <TrashIcon onClick={() => dispatch(deletePost(id))} className="h-7 w-7 cursor-pointer text-red-600"/>
                </div>
                <div className="flex flex-row items-center space-x-3">
                    {
                        postTags.map(tag => (
                            <span className="text-white shadow-inner bg-blue-500 rounded-lg p-1">#{tag}</span>
                        ))
                        }
                </div>
            </div>
    )
}

export default Post;
