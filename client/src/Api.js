import axios from 'axios';

const url="http://localhost:8000/post";

export const addPost = (post)=>async(dispatch)=>{
    await axios.post(url,{post});
    dispatch({type:"ADDPOST",payload:post});
}

export const getPost=()=>async(dispatch)=>{
   const res= await axios.get(url);
  dispatch({type:"GETPOST",payload:res.data});


}

export const updatepost=(post,id)=>async(dispatch)=>{
    await axios.post(url+"/"+id,{post});
    dispatch({type:"UPDATE",payload:post});
}

export const deleteLast=(id)=>async(dispatch)=>{
    await axios.delete(url+"/"+id);
    dispatch({type:"DELETE",payload:id});

}