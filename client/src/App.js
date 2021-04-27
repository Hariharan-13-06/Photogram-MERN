import React,{ useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Posts from './components/Post/Posts';
import Upload from './components/Upload/Upload';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

import './App.css';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
      <div>
        <Header />
        <div className="flex lg:flex-row flex-col-reverse justify-center">
          <Posts setCurrentId={setCurrentId}/>
          <Upload currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
      </div>
  );
}

export default App;
