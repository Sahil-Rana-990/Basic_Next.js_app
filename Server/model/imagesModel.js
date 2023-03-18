const mongoose=require("mongoose");


const ImagesSchemas=mongoose.Schema({
    name:String,
    category:String,
    description:String,
    path:String,
    rating:Number

})


const ImagesModel=mongoose.model('imagesdatas',ImagesSchemas);

module.exports=ImagesModel;