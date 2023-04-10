import { useState } from 'react'
import { addPost } from '../Api';
import '../styles/postform.css'
import { useDispatch } from 'react-redux';
const BlogInfo = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [yourname, setYourName] = useState('');
  const dispatch=useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'content':
        setContent(value);
        break;
      case 'yourname':
        setYourName(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: title,
      content: content,
      yourname: yourname,
    };

    addPost(post);
    console.log(post);
   dispatch(addPost(post));
  
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='fo'>
        <input name='title' type='text' placeholder='title' onChange={handleInputChange} id='title' />
        <textarea name='content' cols='30' rows='10' placeholder='content' value={content} onChange={handleInputChange}></textarea>
        <input name='yourname' type='text' placeholder='your name' onChange={handleInputChange} id='name' />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default BlogInfo;
