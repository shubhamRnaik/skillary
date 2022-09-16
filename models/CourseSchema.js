const {Schema,model} = require('mongoose')


const CourseSchema = new Schema({
    categories:{
        type:String,
        enum:[webdevelopment,bussiness,fashion,datascience,dance]
    },
    subcategory_course:{
        type:String,
        default:"default"
    },
    title:{
        type:String
    },
    discription:{
        type:String,
        
    },
    image:{
        type:[""]
    },
    vide:{
        type:[""]
    },
    course_overView:{
        type:String
    },
    instruction_level:{
        type:String,
        enum:[biginner,intermediate,professional]
    },
    duration_course:{
        type:String
    },
    lastupdate:{
        type:Date.now()
    },
    language:{
        type:String,
        enum:["English","Kannada","Hindi","French"]
    },
    cost:{
        type:String
    },
    currency:{
        type:String,
        enum:[rupess,dollar,rubel]
    },
    authordetail:{
        type:Schema.Types.ObjectId,
        ref:"author"
    }
},{timestamps:true},{index:true})


module.exports = model("course",CourseSchema)