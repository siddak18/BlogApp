export const POST=(state=[],action)=>{
    switch(action.type){
        case "GETPOST":
      return action.payload;
      case "ADDPOST":
        return [action.payload,...state];
      case "UPDATE":
        return state.map(post=>(
          post._id===action.payload._id?{...post,
            title:action.payload.title,
            nameof: action.payload.nameof,
            content: action.payload.content}:post
        ));
        case "DELETE":
          return state.filter(post=>(
       post._id!==action.payload
          ));
        default:
            return state;
    }
}