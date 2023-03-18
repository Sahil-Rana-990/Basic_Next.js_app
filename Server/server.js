const express=require("express");
const mongoose=require("mongoose")
const ImagesModel=require("./model/imagesModel")
const cors=require("cors")


//user-mv3F95VnvF9NRgpz
//db-S4lKcvq49KRMeppb


//connect with mongodb
mongoose.connect("mongodb+srv://RanaSahil:mv3F95VnvF9NRgpz@cluster0.gpbjdww.mongodb.net/ImagesDB")
.then(res=>console.log("database is conneted"))
.catch(err=>console.log(err))

// refernces
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


//   Routes
app.get("/images",async (req,res)=>{
    const result=await ImagesModel.find()
    res.json(result)
})

app.post("/postimages",async (req,res)=>{
    const result=await ImagesModel(req.body);
    const response=await result.save()

    console.log(response)
})

// listing

app.listen(8000,()=>{
    console.log(`server is running on port number 8000`)
})