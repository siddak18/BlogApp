import React, { useState, useEffect } from 'react';
import { getPost, updatepost,deleteLast } from '../Api';
import '../styles/showpost.css';
import { useDispatch, useSelector } from 'react-redux';
const Showblog = () => {
  const [editingPostId, setEditingPostId] = useState(null);
  const [updatedPost, setUpdatedPost] = useState({ title: '', content: '', nameof: '' });
  const dispatch=useDispatch();
const postarr=useSelector(state=>state.POST);
  useEffect( () => {
 dispatch(getPost());
    }
  , []);
  const handleInputChange = e => {
    const { name, value } = e.target;
    setUpdatedPost(prevState => ({ ...prevState, [name]: value }));
  };

  const handleEditClick = (post) => {
    setEditingPostId(post._id);
    setUpdatedPost({ ...post });
  };

  const handleSaveClick =async(postId) => {
    dispatch(updatepost(updatedPost,postId));
    setEditingPostId(null);
  };
  const deletepost=async(id)=>{
    dispatch(deleteLast(id));
  }

  return (
    <div>
     {postarr.map(post => (
        <div key={post._id}>
          {editingPostId === post._id ? (
            <div>
              <input name="title" value={updatedPost.title} onChange={handleInputChange} />
              <textarea name="content" value={updatedPost.content} onChange={handleInputChange} />
              <input name="nameof" value={updatedPost.nameof} onChange={handleInputChange} />
              <button onClick={(e) => handleSaveClick(post._id)}>Save</button>
            </div>
          ) : (
            <div>
              <h2><span>{post.title}</span></h2>
              <p><span>{post.content}</span></p>
              <p><span>{post.nameof}</span></p>
              <button id='edit' onClick={() => handleEditClick(post)}>Edit</button>
              <button id='delete' onClick={()=> deletepost(post._id)}>delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Showblog;
