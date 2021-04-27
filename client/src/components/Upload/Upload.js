import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { createPost, updatePost } from '../../actions/posts';

const Upload = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({ creator: '', title: '', tags: ' ', selectedFile: ''});  
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

        

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', tags: '', selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            console.log('post data',postData)
        dispatch(createPost(postData));
        clear();
        } else {
        dispatch(updatePost(currentId, postData));
        clear();
        }
    };

    return (
        <div className="mt-5 mx-auto space-y-5 shadow-lg p-5 max-w-max my-auto flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-blue-500 underline uppercase">Upload</p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                <TextField label="Shot By" color="primary" fullWidth variant="outlined" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />
                <TextField label="Title" color="primary" fullWidth variant="outlined" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})} />
                <TextField label="Tags" color="primary" fullWidth variant="outlined" vaue={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value})} />
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                <Button variant="contained" color="primary" type="submit">SUBMIT</Button>
                <Button variant="contained" color="secondary" onClick={clear} size="small" >CLEAR</Button>
            </form>
        </div>
    )
}

export default Upload;
//onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}