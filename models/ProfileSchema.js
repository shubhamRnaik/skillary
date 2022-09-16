const {Schema,model} = require('mongoose')



const ProfileSchema = new Schema({


    AuthorName:{
        type:String
    },
    authorimage:{
        type:['']
    },
    authorvideo:{
        type:['']
    },
    authorabout:{
        type:String,
    },
    authordetail:{
        type:Schema.Types.ObjectId,
        ref:"author"
    }
    
})

module.exports = model("author",ProfileSchema)