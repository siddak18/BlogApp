const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const app=express();
app.use(express.json());
app.use(cors());
app.listen(8000,()=>{
    console.log("listening at 8000");
});


// hmyGJYaMoBhMWJuO
const url="mongodb://127.0.0.1:27017/Post"
//const url="mongodb+srv://siddakrajpal14:hmyGJYaMoBhMWJuO@cluster0.k3sqs1d.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser:true});
mongoose.connection.on('connected',()=>{
    console.log("connected");
});
const postschema=mongoose.Schema({
    title:String,
    content:String,
    nameof:String
});

const post=mongoose.model("Post",postschema);
app.post("/post",async(req,res)=>{
    console.log(req.body.post.title);
    const postnew=await new post(
        {
            title:req.body.post.title,
            content:req.body.post.content,
            nameof:req.body.post.yourname
        }
    );
    try {
        postnew.save();
        res.send("saved");
    } catch (error) {
        res.send(error);
    }
  
});

app.get("/post",async(req,res)=>{
    const postarr=await post.find({});
    res.json([...postarr]);
});

app.post("/post/:id",async(req,res)=>{
    await post.findByIdAndUpdate({_id:req.params.id},{
        title:req.body.post.title,
        content:req.body.post.content,
        nameof:req.body.post.nameof
    });
    res.send(req.body.post.nameof);
});

app.delete("/post/:id",async(req,res)=>{
    await post.findByIdAndDelete({_id:req.params.id});
    res.send("deleted succesfully");
})